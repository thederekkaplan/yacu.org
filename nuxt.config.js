export default {
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Young Americans Coalition for Unity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: 'ant-design-vue/dist/antd.less', lang: 'less' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['import', { libraryName: 'ant-design-vue'}]
      ]
    },
    extractCSS: 'true',
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': 'rgb(200, 72, 105)',
            'heading-color': 'rgba(255, 255, 255, 0.95)',
            'text-color': 'rgba(255, 255, 255, 0.85)',
            'text-color-secondary': 'rgba(255, 255, 255, 0.65)',
            'disable-color': 'rgba(255, 255, 255, 0.45)',
            'body-background': 'rgb(29, 67, 110)',
            'component-background': 'rgb(29, 50, 87)',
            'border-color-base': 'rgba(0, 0, 0, 0.85)',
            'border-color-split': 'rgba(0, 0, 0, 0.85)',
            'font-size-base': '16px',
            'statistic-title-font-size': '24px',
            'statistic-content-font-size': '48px',
          }
        }
      }
    }
  },

  server: {
    host: "0"
  },
}
