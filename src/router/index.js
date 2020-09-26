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
    component: () => import('@/views/Privacy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
