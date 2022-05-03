import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import prism from 'markdown-it-prism'
import markdown, { meta } from 'vite-plugin-md'
import visualizer from 'rollup-plugin-visualizer'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  ssr: {
    noExternal: true,
    target: 'webworker',
  },
  plugins: [
    vue({
      reactivityTransform: true,
      include: [/\.vue$/, /\.md$/],
    }),
    markdown({
      markdownItUses: [prism],
      builders: [
        meta({
          routeProps: ['layout'],
        }),
      ],
    }),
    components({
      resolvers: [Vuetify3Resolver()],
      extensions: ['vue', 'md'],
    }),
    layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    pages({
      extensions: ['vue', 'md'],
    }),
    visualizer(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
