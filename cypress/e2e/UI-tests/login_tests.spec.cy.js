import '../../support/commands/webPages/login_commands.js'
import locators from '../../support/locators.js'

let loginpagedata
let toastmessagedata
describe('E2E Login Tests', () => {
  before(() => {
    //captures the json data for the tests
    cy.fixture('login_page_fixture').then((data) => {
      loginpagedata = data
    })
    cy.fixture('toast_message_fixture').then((data) => {
      toastmessagedata = data
    })
  })

  beforeEach(() => {
    cy.visit(loginpagedata.url)
  })

  it('LoginTC01: Success Login', { tags: '@smoke' }, () => {
    cy.InsertEmail(loginpagedata.email)
    cy.InsertPassword(loginpagedata.password)
    cy.ClickLoginButton()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 
  })

  it('LoginTC02: fail login to test screenshot report', () => {
    cy.InsertEmail(loginpagedata.email)
    cy.InsertPassword("wrongPassword")
    cy.ClickLoginButton()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 
  })
})