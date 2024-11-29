// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

require('cypress-xpath');
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

import 'cypress-mochawesome-reporter/register';
import './commands/ui-commands/login-commands.js'
import './commands/api-commands/login-commands.js'
import './commands/api-commands/reset-commands.js'
import  LoginPayload from '../data/request-payloads/post-signin-payload.json';

before(() => {
  const userName = Cypress.env('user')
  const password = Cypress.env('password')
  LoginPayload.email = userName
  LoginPayload.senha = password

  //web login
  cy.doLoginWeb(userName, password)

  //get token for api tests
  cy.doLoginAPI(LoginPayload)
  .then(response =>{
    expect(response.status).to.be.equal(200)
    Cypress.env('token', response.body.token)
  })
})

after(() => {
  //reset app data by api
  cy.resetApp().then(response =>{
    expect(response.status).to.be.equal(200)
  })        
})
// Alternatively you can use CommonJS syntax:
// require('./commands')