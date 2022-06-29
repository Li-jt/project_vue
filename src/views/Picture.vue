<template>
  <div>
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide1">Slide 1</div>
        <div class="swiper-slide swiper-slide2">Slide 2</div>
        <div class="swiper-slide swiper-slide3">Slide 3</div>
      </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div>
    </div> -->
    <div class="pictures">
      <h1 class="title"><i class="el-icon-picture-outline-round"></i> 图片</h1>
      <div class="list">
        <el-col :xs="12" :sm="8" :md="8" :lg="4" :xl="4" v-for="(item, index) in 10" :key="index">
          <Item :item='item' />
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/picture/Item'
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
export default {
  name: 'Picture',
  components: { Item },
  data() {
    return {

    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      effect: 'coverflow',
      autoplayDisableOnInteraction: false,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        paginationClickable: true
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  line-height: 400px;
  color: #b0b0b0;
}

.swiper-slide1 {
  background: red;
}

.swiper-slide2 {
  background: blue;
}

.swiper-slide3 {
  background: yellow;
}

.pictures {
  width: 1200px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;

  .title {
    width: 100%;
    font-size: 20px;
    color: #888;
    padding-left: 10px;
  }

  .list {
    width: 100%;

  }
}
</style>