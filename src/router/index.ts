import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
    meta: {
      noFooter: true,
    },
  },
  {
    path: '/donate/',
    name: '捐款',
    component: () => import('@/views/Donate.vue'),
  },
  {
    path: '/terms/',
    name: '服务条款',
    component: () => import('@/views/Terms.vue'),
  },
  {
    path: '/privacy/',
    name: '隐私政策',
    alias: '/privacy-policy/',
    component: () => import('@/views/Privacy.vue'),
  },
  {
    path: '/members/',
    name: '成员列表',
    component: () => import('@/views/Members.vue'),
  },
  {
    path: '/members/:name',
    name: '成员',
    component: () => import('@/views/Member.vue'),
  },
  {
    path: '/.*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

declare module 'vue-router' {
  interface RouteMeta {
    noFooter?: boolean
  }
}

export default router
