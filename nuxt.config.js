export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-frame',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '阿拉丁皮皮马特，gute的description' },
      { hid: 'keywords', name: 'keywords', content: '阿拉丁皮皮马特，gute的keywords' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/router',
    {
      src:'@/plugins/request',
      ssr:true//服务端
    },
    '@/plugins/request-plugin',
  ],
  router:{
    // middleware:'auth',

    //扩展路由
    // extendRoutes(routes,resolve){
    //   console.log(routes);
    //   routes.push(...routes,...seo)
    // }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'],
  axios:{
    proxy:true,//开启axios跨域
    // prefix: '/api', // baseURL
    // credentials: true,
  },
  proxy:{
    '/api':{
      target:'http://139.224.51.81:9999',//代理转发的地址
      changeOrigin:true,
      pathRewrite:{
        '^/api/':'/'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
