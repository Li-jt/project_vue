const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/project_vue/"
  // devServer: {
  //   proxy: {

  //   }
  // }
})