/*
 * @Author: lijt
 * @Date: 2022-09-15 09:32:10
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-15 11:16:25
 * @FilePath: \proxy_vue\tests\e2e\e2eUtils.js
 * @Description: 
 */
const e2eTestTimeout = 30 * 1000;
const cyUtils = (cys, url) => {
  let cy = cys
  beforeEach(async () => {
    await cy.visit(`http://192.168.66.223:8082/project_vue/#/${url}`)
  })

  const setValue = async (dom, value) => {
    cy.get(dom).type(value)
  }

  return {
    setValue
  }
}

export {
  cyUtils,
  e2eTestTimeout
}