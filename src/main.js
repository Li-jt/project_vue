/*
 * @Author: lijt
 * @Date: 2022-06-18 18:23:26
 * @LastEditors: lijt
 * @LastEditTime: 2022-10-10 15:46:29
 * @FilePath: \proxy_vue\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import './common/base.css'
import 'animate.css';
import router from './router'
import storage from '@/utils/storage/storage.js';
import store from './store'
import element from './element'
import * as echarts from "echarts";
import echartsGL from 'echarts-gl'
Vue.prototype.$echarts = echarts;
Vue.prototype.$echartsGL = echartsGL
Vue.use(element)

import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')