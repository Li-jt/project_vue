<template>
  <div class="bg" :style="style">
    <!-- 月亮 -->
    <div class="conts">
      <transition-group appear name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInDown" leave-active-class="animate__bounceOutUp" mode="out-in">
        <div v-if="isMoon === -1" key="3"></div>
        <!-- 月亮 -->
        <div class="moon" v-else-if="isMoon === 3" key="1"></div>
        <!-- 太阳 -->
        <div class="sun" v-else key="2"></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { bgColor } from '@/common/config'
import dayjs from "dayjs";
export default {
  name: 'JtBg',
  data() {
    return {
      style: '',
      isMoon: -1
    }
  },
  computed: {},
  mounted() {
    this.setBgColor();
  },
  methods: {
    setBgColor() {
      this.style = `background-image:linear-gradient(${this.getData().toString()})`;
    },
    getData() {
      //当前时间戳
      let time = new Date().getTime();
      let start, end;
      for (let i = 0; i < bgColor.length; i++) {
        // 设置的开始时间
        start = new Date(`${dayjs().format('YYYY-MM-DD')} ${bgColor[i].timeInterval.start}:00:00`).getTime();
        // 设置的结束时间
        end = new Date(`${dayjs().format('YYYY-MM-DD')} ${bgColor[i].timeInterval.end}:00:00`).getTime();
        if (time >= start && time < end || bgColor[i].timeInterval.end == 0) {
          this.isMoon = i;
          return bgColor[i].color;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  // background-color: aqua;
}

.conts {
  width: 100px;
  height: 100px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  .sun {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FCAA12;
    box-shadow: 0px 0px 15px #FCAA12;
  }

  .moon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #FCF9F7;
    box-shadow: 0px 0px 15px #FCF9F7;
  }
}
</style>