<template>
  <div class="box">
    <div class="cont">
      <ul class="list">
        <li class="item" v-for="(item, i) in list" :key="i" @click.stop="shwoList(i), goAnchor(`#app_${i}`)">
          <div class="show">
            <div>
              <i class="el-icon-edit"></i>
              <span>{{ item.title }}</span>
            </div>
            <span :style="i == index ? `transform: rotate(${rotateDeg}deg);` : ''">
              <svg class="icon" width="10px" height="10.00" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="#ccc"
                  d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" />
              </svg>
            </span>
          </div>
          <transition enter-active-class="collapse" leave-active-class="collapse" @enter="enter"
            @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
            <ul v-show="i == index">
              <li v-for="(t, i) in item.list" :key="i">{{t.name}}</li>
            </ul>
          </transition>
        </li>
      </ul>
      <div class="canvasfont" @click.stop="">
        <CanvasFont :width='30' :height='30' :fontSize="20" :fontWeight="600" />
      </div>
    </div>
  </div>
</template>

<script>
import CanvasFont from '../CanvasFont'
import { list } from '@/mock/home'
export default {
  components: { CanvasFont },
  props: {
    msg: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: -1,
      rotateDeg: 0,
      list,
    }
  },
  methods: {
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      })
    },
    shwoList(i, v) {
      if (v !== 'home') {
        this.$emit('zoom', 'left');
      }
      this.index = this.index == i ? -1 : i;
      this.rotateDeg = 90;
    },
    enter(el) {
      el.style.height = 'auto'
      let endWidth = window.getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // force repaint
      el.style.height = endWidth
    },
    afterEnter(el) {
      el.style.height = null
    },
    leave(el) {
      el.style.height = window.getComputedStyle(el).height
      el.offsetHeight // force repaint
      el.style.height = '0px'
    },
    afterLeave(el) { el.style.height = null },
  }
}
</script>

<style lang="scss" scoper>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  .cont {
    width: 170px;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 100vh;
    // background: chartreuse;

    .list {
      color: #ccc;

      .item {
        width: 100%;
        // height: 50px;
        line-height: 50px;
        cursor: pointer;
        user-select: none;

        .show {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            i {
              font-size: 20px;
              margin-left: 5px;
            }

            span {
              font-size: 16px;
              margin-left: 5px;
            }
          }

          ul {
            overflow: hidden;
          }
        }
      }
    }

    .edit {
      font-size: 30px;
      color: #ccc;
    }

    .canvasfont {
      width: 30px;
      height: 30px;
      background-color: #696969;
      cursor: pointer;
    }

    .canvasfont:hover {
      box-shadow: 0 0 5px #fff inset;
    }
  }
}

.collapse {
  transition: height .3s ease-in-out;
  overflow: hidden;
}

.s {
  transform: rotate('45deg');
  transition: all .3s ease-in-out;
}
</style>