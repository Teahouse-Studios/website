import { RouterOptions } from 'vite-ssg'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home.vue'),
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
    path: '/products/',
    name: '产品列表',
    component: () => import('@/views/Products.vue'),
  },
]

const router: RouterOptions = {
  routes,
}

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    noFooter?: boolean
  }
}

export default router
