/*
 * @Author: lijt
 * @Date: 2022-09-15 09:28:10
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-16 10:50:02
 * @FilePath: \proxy_vue\tests\e2e\specs\login.spec.js
 * @Description: 登录测试
 */
// import { cyUtils, e2eTestTimeout } from '../e2eUtils'
describe('login', () => {
  // const { setValue } = cyUtils(cy, 'login')

  const formTest = async () => {

    cy.visit('http://192.168.66.223:8082/project_vue/#/login')
    // setValue('.login > .cont > .username > .UI > .ui_input', '15226153903')
    // setValue('.login > .cont > .password > .UI > .ui_input', '123456')
    cy.input('.login > .cont > .username > .UI > .ui_input', '15226153903')
    cy.input('.login > .cont > .password > .UI > .ui_input', '123456')
    cy.tab('.login > .cont > .login_button > .button > .btn')
    // cy.get('.login > .cont > .password > .UI > .ui_input').type('123456')
    cy.get('.login > .cont > .login_button > .button > .btn').click()

    expect(cy.url()).to.contain('http://192.168.66.223:8082/project_vue/#/login')
  }

  it('test e2e login', async () => await formTest());
  // it('test e2e login', browser => {
  //   browser.url('http://192.168.66.223:8082/project_vue/#/login')
  //     .setValue('.login > .cont > .username > .UI > .ui_input', '15226153903')
  // });
})