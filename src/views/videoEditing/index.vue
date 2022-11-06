<!--
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-08-04 12:25:15
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-01 15:02:26
 * @FilePath: \proxy_vue\src\views\videoEditing\index.vue
 * @Description: 序列帧生成视频
-->
<template>
  <div class="app">
    <canvas v-if="!video"
            ref="cas"
            :width="width / 2"
            :height="height / 2"
            class="canvas"></canvas>
    <video v-else
           autoplay
           controls
           :src="video"></video>
    <div class="app_cont">
      <div class="timerShaft"
           @drop="fileDrop($event)"
           @dragover="fileDragover($event)"
           style="height: 100px;"
           v-if="fileList.length === 0">
        <div class="file_ps">拖入图片或点击选择图片序列帧</div>
        <input class="file"
               type="file"
               multiple="multiple"
               accept="image/*"
               @change="previewHandle($event.target.files)" />
      </div>
      <div class="timerShaft"
           v-else>
        <div draggable="true"
             class="border"
             :class="{ 'select_img': index === i }"
             @dragenter="dragenter($event, i)"
             @dragover.prevent
             @click="setFrames(i)"
             v-for="(item, i) in fileList"
             :key="i">
          <img @dragstart="dragstart($event, i)"
               class="img"
               :src="item"
               alt="">
        </div>
      </div>
    </div>
    <div class="btns">
      <el-button v-if="imgList.length > 0"
                 type="success"
                 @click="captureStream">生成视频</el-button>
      <el-button v-if="imgList.length > 0"
                 type="success"
                 @click="stopStream">停止视频</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ctx: null,
      recorder: null,
      width: 1920,
      height: 1080,
      fileList: [],
      imgList: [],
      index: 0,
      video: '',
      play: false,
      dragIndex: 0,
    }
  },
  methods: {
    init () {
      this.ctx = this.$refs.cas.getContext('2d');
      this.setImgList()
      this.frame()
    },
    frame () {
      this.setWH();
      this.drawImg(this.imgList[this.index]);
      if (this.play) {
        this.index += 1
      }
      if (this.index > this.imgList.length - 1) {
        this.index = 0
      }
      // 帧数
      setTimeout(this.frame, 1000 / 24)
      // requestAnimationFrame(this.frame);
    },
    captureStream () {
      this.play = true
      const stream = this.$refs.cas.captureStream();
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      this.recorder = recorder
      let data = [];
      recorder.ondataavailable = function (event) {
        if (event.data && event.data.size) {
          data.push(event.data);
        }
      };
      recorder.onstop = () => {
        const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));
        this.video = url
        this.play = false
      };
      recorder.start();
    },
    stopStream () {
      this.recorder.stop();
    },
    setWH () {
      this.width = 1920
      this.height = 1080
    },
    drawImg (img) {
      this.ctx.drawImage(img, 0, 0, this.width / 2, this.height / 2);
    },
    previewHandle (e) {
      // let list = e.target.files
      let list = e
      for (let i = 0; i < list.length; i++) {
        this.fileList.push(window.URL.createObjectURL(list[i]))
      }
      this.init()
    },
    setFrames (i) {
      if (this.index !== i) {
        this.index = i
      }
    },
    dragstart (e, i) {
      this.dragIndex = i
    },
    dragenter (e, i) {
      if (i !== this.dragIndex) {
        const file = this.fileList[this.dragIndex];
        this.fileList.splice(this.dragIndex, 1);
        this.fileList.splice(i, 0, file);
        this.setImgList()
        // 排序变化后目标对象的索引变成源对象的索引
        this.dragIndex = i;
      }
    },
    fileDragover (e) {
      e.preventDefault();
    },
    fileDrop (e) {
      e.preventDefault()
      this.previewHandle(e.dataTransfer.files)
      console.log(e.dataTransfer.files);
    },
    // 设置imgList
    setImgList () {
      this.imgList = []
      let img
      this.fileList.map(item => {
        img = new Image()
        img.src = item
        this.imgList.push(img)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app_cont {
  width: 100%;
}

.canvas {
  // transform: scale(0.5);
  background-color: antiquewhite;
  margin: 0 auto;
}

.img {
  width: 100px;
}

.timerShaft {
  width: 90%;
  border: 1px solid antiquewhite;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: relative;
}

.file {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file_ps {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}

.border {
  border: 2px solid transparent;
}

.select_img {
  border: 2px solid red;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>