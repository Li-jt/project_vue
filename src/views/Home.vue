<template>
  <div class="home">
    <div class="left" ref="left" @click="zoom">
      <Left @zoom='zoom' ref="child" />
    </div>
    <div class="right">
      <Bg :leftWidth='leftWidth' />
    </div>
  </div>
</template>

<script>
import Bg from '@/components/home/Bg'
import Left from '@/components/home/Left'
export default {
  name: 'Home',
  components: { Bg, Left },
  data() {
    return {
      leftWidth: 300,
      num: 10,
      s: true,
      msg: 0,
      isKeydown: false,
      keyCode: -1,
    }
  },
  mounted() {
    this.getToken();
    this.$nextTick(() => {
      this.leftWidth = this.$refs.left.clientWidth;
      console.log(this.leftWidth);
    })
    window.addEventListener('keydown', this.keydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    getToken() {
      let token = this.$store.state.userOptions.token;
      if (token === '') {
        this.$router.push({
          name: 'login'
        });
      }
    },
    zoom(v) {
      if (v === 'left') {
        if (this.leftWidth >= 200) return;
      }

      if (this.leftWidth <= 50 && this.s) {
        this.leftWidth = 50;
        this.s = false;
        // 关闭的时候
        this.$refs.child.shwoList(-1, 'home');
        return;
      }

      if (this.leftWidth >= 200 && !this.s) {
        this.leftWidth = 200;
        this.s = true;
        // 打开的时候
        if (this.isKeydown) {
          this.isKeydown = false;
          this.$refs.child.shwoList(this.keyCode, 'home');
        }
        return;
      }

      if (this.s) {
        this.leftWidth -= 10;
      } else {
        this.leftWidth += 10;
      }

      setTimeout(this.zoom, 10)
    },
    keydown(event) {
      this.isKeydown = true;
      if (event.keyCode === 32) {
        this.keyCode = -1;
        this.zoom();
      }
      if (event.keyCode === 49) {
        this.keyCode = 0;
        this.zoom();
      }
      console.log(event);
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  // width: 1200px;
  // height: 1200px;
  overflow: hidden;
  display: flex;

  .left {
    width: 200px;
    height: 100vh;
    background: #2D2E30;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }

  .right {
    flex: 1;
  }

  // div {
  //   width: 100%;
  //   height: 100%;
  //   background: inherit;
  //   box-shadow: inset 0 0 0 1200px rgba(255, 255, 255, 0.65);
  //   filter: blur(10px);
  // }
}
</style>