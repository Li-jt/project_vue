/*
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-06-18 18:23:26
 * @LastEditors: lijt
 * @LastEditTime: 2022-10-10 16:04:28
 * @FilePath: \proxy_vue\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    redirect: '/',
  }, {
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: '首页'
    },
  }, {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登录'
    },
  }, {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    },
  }, {
    path: '/chat',
    name: 'chat',
    component: () => import( /* webpackChunkName: "about" */ '../views/Chat.vue'),
    meta: {
      title: '聊天室'
    },
  }, {
    path: '/picture',
    name: 'picture',
    component: () => import( /* webpackChunkName: "about" */ '../views/Picture.vue'),
    meta: {
      title: '图片'
    },
  }, {
    path: '/game/picture/climbingTower',
    name: 'climbingTower',
    component: () => import( /* webpackChunkName: "about" */ '../views/game/climbingTower/Index.vue'),
    meta: {
      title: '爬塔游戏'
    },
  }, {
    path: '/videoEditing/index',
    name: 'videoEditing',
    component: () => import( /* webpackChunkName: "about" */ '../views/videoEditing/index.vue'),
    meta: {
      title: '视频编辑'
    },
  },
  {
    path: '/eCharts/map',
    name: 'map',
    component: () => import( /* webpackChunkName: "about" */ '../views/eCharts/map.vue'),
    meta: {
      title: '地图'
    },
  },
  {
    path: '/game/music/index',
    name: 'andCold',
    component: () => import( /* webpackChunkName: "about" */ '../views/game/music/index.vue'),
    meta: {
      title: '冰火舞'
    },
  },
  {
    path: '/arcgis',
    name: 'arcgis',
    component: () => import( /* webpackChunkName: "about" */ '../views/arcgis/index.vue'),
    meta: {
      title: '地图'
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
})

export default router