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
}]

const router = new VueRouter({
  mode: 'history',
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