/*
 * @Author: lijt
 * @Date: 2022-09-15 11:08:11
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-15 11:19:30
 * @FilePath: \proxy_vue\tests\e2e\.eslintrc.js
 * @Description: 
 */
module.exports = {
  plugins: ["cypress"],
  env: {
    mocha: true,
    "cypress/globals": true
  },
  rules: {
    strict: "off"
  }
};
