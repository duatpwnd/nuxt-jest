module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global_mapmutations.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    proxy: true // proxy 사용
  },
  /*
   ** Build configuration
   */
  serverMiddleware: [
    // <project root>/api/index.js 모듈을 미들웨어로 추가
    {
      path: "/test1",
      handler: "~/api/route1.js"
    },
    {
      path: "/test2",
      handler: "~/api/route2.js"
    }
  ],
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {}
  }
};
