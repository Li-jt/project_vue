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
}]

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