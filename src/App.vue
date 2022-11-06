<!--
 * @Author: lijt
 * @Date: 2022-06-18 18:23:26
 * @LastEditors: lijt
 * @LastEditTime: 2022-10-10 15:50:33
 * @FilePath: \proxy_vue\src\App.vue
 * @Description: 
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "@arcgis/core/assets/esri/themes/dark/main.css";

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
