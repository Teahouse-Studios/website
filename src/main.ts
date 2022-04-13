import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import vuetify from './plugins/vuetify'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(vuetify)
  }
)
