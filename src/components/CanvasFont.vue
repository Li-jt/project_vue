<template>
  <div>
    <canvas ref="cas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'dp'
    },
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
    fontSize: {
      type: Number,
      default: 30
    },
    fontWeight: {
      type: Number,
      default: 400
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      ctx: null,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.ctx = this.$refs.cas.getContext('2d');
      const colors = this.color;
      /*文字内容*/
      const text = this.text;
      /*文字位置*/
      const [x, y] = [this.width / 2, this.height / 2];
      //字体属性
      this.ctx.font = `${this.fontWeight} ${this.fontSize}px arial`;
      this.draw(colors, text, x, y);
    },
    draw(colors, text, x, y) {
      //设置描边样式
      this.ctx.strokeStyle = colors;
      //设置描边宽度
      this.ctx.lineWidth = 1;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = "middle";
      //以描边的方式显示路径
      this.ctx.strokeText(text, x, y);
      // this.ctx.fillStyle = "rgba(255,255,255,1)";

      // this.ctx.fillText(text, x, y);
      // this.ctx.clip();

      // this.ctx.beginPath();
      // // this.ctx.fillStyle = "#fff";
      // this.ctx.fillRect(0, 0, 30, 30);
      // this.ctx.closePath();
      // this.ctx.stroke();

    }
  }
}
</script>

<style>
</style>