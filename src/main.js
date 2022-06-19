import Vue from 'vue'
import App from './App.vue'
import './common/base.scss'
import 'animate.css';
import router from './router'
import storage from '@/utils/storage/storage.js';
import store from './store'
import element from './element'
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')