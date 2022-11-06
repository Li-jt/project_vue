<!--
 * @Author: lijt
 * @Date: 2022-08-26 09:28:08
 * @LastEditors: lijt
 * @LastEditTime: 2022-08-26 09:53:09
 * @FilePath: \proxy_vue\src\components\CountBtn.vue
 * @Description: 
-->
<template>
  <button @click="++num">点击次数{{ num }}</button>
</template>
<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    sum(num, num1) {
      return num + num1
    },
  }
}
</script>