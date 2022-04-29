import App from './App.vue'
import { createApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import vuetify from './plugins/vuetify'
import { createRouter, createWebHistory } from 'vue-router'

const routes = setupLayouts(generatedRoutes)

const app = createApp(App)
app.use(vuetify)
app.use(createRouter({ routes, history: createWebHistory() }))
app.mount('#app')
