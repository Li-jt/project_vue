/*
 * @Author: lijt 15226153903@163.com
 * @Date: 2022-06-18 18:19:58
 * @LastEditors: lijt 15226153903@163.com
 * @LastEditTime: 2022-08-06 23:12:29
 * @FilePath: \proxy_vue\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: "/project_vue/"
  // devServer: {
  //   proxy: {

  //   }
  // }
})