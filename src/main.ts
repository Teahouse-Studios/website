import '@/styles/app.scss'
import App from './App.vue'
import { createSSRApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import vuetify from './plugins/vuetify'
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes = setupLayouts(generatedRoutes)

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter({
    routes,
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  })
  app.use(vuetify)
  app.use(router)
  app.mount('#app')
  return { app, router }
}
