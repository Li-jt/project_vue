<template>
  <div class="home">
    <div class="left"
         ref="left"
         @click="zoom"
         :style="`width:${leftWidth}px`">
      <Left @zoom='zoom'
            ref="child" />
    </div>
    <div class="right"
         :style="`margin-left:${leftWidth}px`">
      <el-tooltip v-if="msg.hitokoto"
                  class="item"
                  effect="dark"
                  content="点击百度一下"
                  placement="bottom">
        <div class="yiyan"
             @click="open"
             v-show="msg">
          <p class="text">{{ msg.hitokoto }}</p>
          <p class="name">—— {{ msg.from_who }} 《{{ msg.from }}》</p>
        </div>
      </el-tooltip>

      <Bg :leftWidth='leftWidth' />
      <RightList />
    </div>
  </div>
</template>

<script>
import Bg from '@/components/home/Bg'
import Left from '@/components/home/Left'
import RightList from '@/components/home/RightList'
import { homeConfig } from '@/common/config'
import { mapActions, mapState } from 'vuex'
import { GETHITOKOTO } from '@/store/hitokoto/types'
export default {
  name: 'Home',
  components: { Bg, Left, RightList },
  data () {
    return {
      leftWidth: 0, //控制左侧边栏：50为关闭，300为打开
      s: false,//控制左侧边栏：false为关闭，true为打开
      isKeydown: false,
      keyCode: -1,
    }
  },
  computed: {
    ...mapState('hitokotoOptions', ['msg'])
  },
  created () {
    //控制左侧边栏开关
    if (homeConfig.leftSidebar.isUnfold) {
      this.leftWidth = 300;
      this.s = true;
    } else {
      this.leftWidth = 50;
      this.s = false;
    }
    this[GETHITOKOTO]();
  },
  mounted () {
    this.getToken();
    this.$nextTick(() => {
      this.leftWidth = this.$refs.left.clientWidth;
      console.log(this.leftWidth);
    })
    window.addEventListener('keydown', this.keydown)
  },
  destroyed () {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    ...mapActions('hitokotoOptions', [GETHITOKOTO]),
    getToken () {
      let token = this.$store.state.userOptions.token;
      if (token === '') {
        this.$router.push({
          name: 'login'
        });
      }
    },
    open () {
      window.open(`https://www.baidu.com/s?wd=${this.msg.hitokoto}`)
    },
    zoom (v) {
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
    keydown (event) {
      event.preventDefault();
      this.isKeydown = true;
      if (event.keyCode === 32) {

        //空格
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
    background: #2d2e30;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
  }

  .right {
    flex: 1;
    background-color: #1c1d1f;
    margin-left: 200px;
    position: relative;

    .yiyan {
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translate(-50%);
      z-index: 1;
      color: rgba($color: #fff, $alpha: 1);
      // -webkit-text-fill-color: transparent;
      // -webkit-text-stroke: 0.1px #fff;

      .text {
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
      }

      .name {
        font-size: 20px;
        float: right;
        transform: translateX(20%);
      }
    }
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