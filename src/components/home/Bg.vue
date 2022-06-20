<template>
  <div class="bg">
    <canvas class="canvas" ref="canvas"></canvas>
    <img ref="img" src="@/static/images/silhouette.png" alt="" v-show="false">
  </div>
</template>

<script>
import { getRandom } from '@/utils/utils'
export default {
  data() {
    return {
      ctx: null,
      height: 300,
      time: 0,
      index: 0,
      colors: [
        [0, '#814CB6'],
        [0.7, '#4B0082'],
        [0.32, '#191970'],
        [0.42, '#123597'],
        [0.82, '#4169E1'],
        [0.9, '#814CB6'],
        [1, '#814CB6'],
      ],
      stop: 0,
      stopNum: 0.01,
      start: 0,
      offset: 0,// 计算偏移
      palette: [],
      fillRgba: '',
      stars: [],//星星
      starTime: 0, //最新创建时间
      img: null
    }
  },
  mounted() {
    //监听浏览器窗口变化
    this.init();
  },
  beforeDestroy() {
    //移除监听浏览器窗口变化
  },
  methods: {
    init() {
      //初始化
      //取得2d上下文对象(画笔)
      this.setWH();
      this.ctx = this.$refs.canvas.getContext('2d');
      this.palette = this.colorPalette();
      this.img = new Image();
      this.img.src = this.$refs.img.src;
      this.start = Date.now();
      this.time = Date.now();
      this.offset = Math.floor((Date.now() - this.start) / (3300 / 256)) % 256;
      requestAnimationFrame(this.frame);
      //预先生成30个星星，防止初始化空屏
      for (let i = 0; i < 30; i++) {
        this.stars.push({
          size: getRandom(1, 2),
          // speed: (Math.random() * (0.3 - 0.1) + 0.1),
          speed: 0.1,
          x: getRandom(0, this.$refs.canvas.width),
          y: getRandom(0, this.height),
          alpha: (Math.random() * (0.5 - 0.3) + 0.3).toFixed(2),
        })
      }
    },
    frame() {
      this.setWH();
      this.draw();
      this.createStar();
      this.drawImg();
      requestAnimationFrame(this.frame);
    },
    colorPalette() {
      let grad = this.ctx.createLinearGradient(0, 0, 0, this.height)
      this.colors.forEach((item) => {
        grad.addColorStop(item[0], item[1])
      })
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, this.$refs.canvas.width, this.height);
      return this.ctx.getImageData(0, 0, 1, 256).data;
    },
    draw() {
      if ((Date.now() - this.time) % 20 == 0) {
        if (this.stop >= 0.1) this.stopNum = -0.01;
        if (this.stop <= 0.01) this.stopNum = 0.01;
        this.stop += this.stopNum;
      }

      if ((Date.now() - this.time) >= 1000) {
        this.time = Date.now();
      }
      this.offset = Math.floor((Date.now() - this.start) / (33000 / 256)) % 256;


      let grad = this.ctx.createLinearGradient(0, 0, 0, this.height)
      let fill = 'rgba(' + [
        this.palette[this.offset * 4 + 0],
        this.palette[this.offset * 4 + 1],
        this.palette[this.offset * 4 + 2],
        this.palette[this.offset * 4 + 3]
      ] + ')';
      if (fill === 'rgba(0,0,0,0)') {
        fill = this.fillRgba;
        this.palette = this.colorPalette();
      }
      this.ctx.beginPath();
      this.fillRgba = fill;
      grad.addColorStop(0, "#000");
      grad.addColorStop(this.stop, "#000");
      grad.addColorStop(1, fill)

      this.ctx.fillStyle = grad;

      this.ctx.fillRect(0, 0, this.$refs.canvas.width, this.height);
      this.ctx.closePath();
      this.drawStar();
    },
    // 渲染星星
    drawStar() {
      this.stars.forEach((item, i) => {
        if (item.y <= -10) {
          this.stars.splice(i, 1);
        }
        this.ctx.beginPath();
        item.y -= item.speed
        this.ctx.fillStyle = `rgba(255,255,255,${item.alpha})`;
        // this.ctx.shadowColor = `rgba(255,255,255,0.75)`;
        // this.ctx.shadowBlur = 5;
        this.ctx.arc(item.x, item.y, item.size, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
      })
    },
    // 创建星星
    createStar() {
      if (Date.now() - this.starTime >= 1000 || this.starTime == 0) {
        this.starTime = Date.now();
        this.stars.push({
          size: getRandom(1, 2),
          // speed: (Math.random() * (0.3 - 0.1) + 0.1),
          speed: 0.1,
          x: getRandom(0, this.$refs.canvas.width),
          y: this.height,
          alpha: (Math.random() * (0.5 - 0.3) + 0.3).toFixed(2),
        });
      }
    },
    drawImg() {
      this.ctx.drawImage(this.img, this.$refs.canvas.width / 2 - 50, this.height - 130, 100, 200);
    },
    //设置canvas宽高
    setWH() {
      this.$refs.canvas.width = window.innerWidth
      this.$refs.canvas.height = this.height
    },
  }
}
</script>

<style lang="scss" scoper>
.bg {
  // width: 100vw;
  // height: 100vh;
}

.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 80, 1);
}
</style>