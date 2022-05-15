const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/open-news-site/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/main.scss";`,
      },
    },
  },
})