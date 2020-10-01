import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/donate/',
    name: '捐款',
    component: () => import('@/views/Donate.vue')
  },
  {
    path: '/terms/',
    name: '服务条款',
    component: () => import('@/views/Terms.vue')
  },
  {
    path: '/privacy/',
    name: '隐私政策',
    alias: '/privacy-policy/',
    component: () => import('@/views/Privacy.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
