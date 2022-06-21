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
::-webkit-scrollbar {
  width: 5px;
}

/* // 滚动条轨道 */
::-webkit-scrollbar-track {
  /* background: rgb(239, 239, 239); */
  border-radius: 2px;
}

/* // 小滑块 */
::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
