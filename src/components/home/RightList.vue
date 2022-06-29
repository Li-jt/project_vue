<template>
  <div>
    <div class="app" :id="`app_${i}`" v-for="(t, i) in list" :key="i">
      <p class="title"><i class="el-icon-edit"></i><span>{{ t.title }}</span></p>
      <div class="list">
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4" v-for="(item, index) in t.list" :key="index">
          <el-tooltip class="item" effect="dark" content="常用工具" placement="bottom">
            <div class="item" @click="skip(item)">
              <div class="cont">
                <div class="left">
                  <div class="img">
                    <CanvasFont :text="item.icon" :fontSize="20" color="#A0522D" />
                  </div>
                  <p class="name">{{ item.name }}</p>
                </div>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </el-tooltip>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasFont from '@/components/CanvasFont'
import { list } from '@/mock/home'
export default {
  components: { CanvasFont },
  data() {
    return {
      list,
    }
  },
  methods: {
    skip(v) {
      if (v.url) {
        this.$router.push({
          name: v.url
        });
      }
      console.log(v);
    }
  }
}
</script>

<style lang="scss" scoper>
.app {
  width: 100%;
  padding: 20px 10px 20px 0;
  box-sizing: border-box;

  .title {
    padding-left: 10px;
    display: flex;
    align-items: center;
    color: #888;
    font-size: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;

    span {
      margin-left: 5px;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      // width: 20%;
      padding: 0 10px;
      margin-bottom: 15px;
      box-sizing: border-box;

      .cont {
        position: relative;
        cursor: pointer;
        user-select: none;
        padding: 5px 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #c6c9cf;
        background-color: #2D2E30;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        transition: all .3s linear;

        .left {
          display: flex;
          align-items: center;

          .img {
            background-color: #353638;
            height: 50px;
            border-radius: 50%;
          }

          .name {
            font-size: 15px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 5px;
          }
        }

        i {}
      }

      .cont:hover {
        color: #fff;
        transform: translateY(-10px);
        transition: all .3s linear;
      }

      .cont::before {
        content: '';
        position: absolute;
        top: -30%;
        left: -50%;
        width: 30px;
        height: 150%;
        transform: rotate(20deg);
        background-color: rgba($color: #fff, $alpha: 0.3);
      }

      .cont:hover:before {
        // overflow: hidden;
        // left: 150%;
        // transition: .3s;
      }

      .cont::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, #ccc 10%, transparent 10.1%);
        transform: scale(10);
        opacity: 0;
        transition: all .6s;
      }

      .cont:active::after {
        transform: scale(0);
        opacity: .5;
        transition: 0s;
      }
    }
  }
}
</style>