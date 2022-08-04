<!--
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-08-04 12:25:15
 * @LastEditors: lijt 15226153903@163.com
 * @LastEditTime: 2022-08-04 13:24:50
 * @FilePath: \proxy_vue\src\views\game\videoEditing\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app">
    <canvas v-if="!video" ref="cas" :width="width / 2" :height="height / 2" class="canvas"></canvas>
    <div>
      <input v-if="fileList.length === 0" type="file" multiple="multiple" accept="image/*"
        @change="previewHandle($event)" />
      <div v-else>
        <img class="img" :src="item" alt="" v-for="(item, i) in fileList" :key="i">
      </div>
    </div>
    <el-button type="success" @click="captureStream">生成视频</el-button>
    <video v-if="video" autoplay controls :src="video"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctx: null,
      width: 1920,
      height: 1080,
      fileList: [],
      imgList: [],
      index: 0,
      video: '',
      play: false,
    }
  },
  methods: {
    init() {
      this.ctx = this.$refs.cas.getContext('2d');
      let img
      this.fileList.map(item => {
        img = new Image()
        img.src = item
        this.imgList.push(img)
      })
      this.frame()
    },
    frame() {
      this.setWH();
      this.drawImg(this.imgList[this.index]);
      if (this.play) {
        this.index += 1
      }
      if (this.index > this.imgList.length - 1) {
        this.index = 0
      }
      // 帧数
      setTimeout(this.frame, 1000 / 1)
      // requestAnimationFrame(this.frame);
    },
    captureStream() {
      this.play = true
      const stream = this.$refs.cas.captureStream();
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      let data = [];
      recorder.ondataavailable = function (event) {
        if (event.data && event.data.size) {
          data.push(event.data);
        }
      };
      recorder.onstop = () => {
        const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));
        console.log(url);
        this.video = url
        // document.querySelector("#videoContainer").style.display = "block";
        // document.querySelector("video").src = url;
      };
      recorder.start();

      setTimeout(() => {
        recorder.stop();
      }, 6000);
    },
    setWH() {
      this.width = 1920
      this.height = 1080
    },
    drawImg(img) {
      this.ctx.drawImage(img, 0, 0, this.width / 2, this.height / 2);
    },
    previewHandle(e) {
      let list = e.target.files
      for (let i = 0; i < list.length; i++) {
        this.fileList.push(window.URL.createObjectURL(list[i]))
      }
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
  position: relative;
}

.canvas {
  // transform: scale(0.5);
  background-color: antiquewhite;
}

.img {
  width: 100px;
}
</style>