/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module 'vuetify'
declare module 'vuetify/lib/components'
declare module 'vuetify/lib/directives'
