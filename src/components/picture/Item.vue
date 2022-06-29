<template>
  <div class="item">
    <div>
      <img src="@/static/images/moon.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
  cursor: pointer;
  overflow: hidden;

  div {
    box-shadow: 1px 1px 3px #888;
    border-radius: 5px;
    padding: 10px;
  }

  div:hover img {
    transform: scale(1.2);
    transition: all .3s;
  }

  // background-color: aliceblue;
  img {
    width: 100%;
    transition: all .3s;
  }
}
</style>