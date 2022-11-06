/*
 * @Author: lijt
 * @Date: 2022-09-14 13:56:45
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-16 10:50:39
 * @FilePath: \proxy_vue\tests\e2e\support\commands.js
 * @Description: 
 */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('input', (dom, val) => {
  cy.get(dom).type(val)
  cy.wait(1000)
})
Cypress.Commands.add('tab', (dom) => {
  cy.get(dom).click()
  cy.wait(500)
})
