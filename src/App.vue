<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* // 滚动条宽度 */
div::-webkit-scrollbar {
  width: 6px;
}

/* // 滚动条轨道 */
div::-webkit-scrollbar-track {
  /* background: rgb(239, 239, 239); */
  border-radius: 2px;
}

/* // 小滑块 */
div::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 10px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
