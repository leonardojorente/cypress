import '../../support/commands/webPages/login_commands.js'
import '../../support/commands/components/app_header_component_commands.js'
import '../../support/commands/webPages/account_commands.js'
import Utils from '../../support/commands/utils/utils_commands.js'
import locators from '../../support/locators.js'

let loginpagedata
let toastmessagedata
describe('E2E Account Tests', () => {
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
    //login app
    cy.visit(loginpagedata.url)
    cy.Login(loginpagedata.email, loginpagedata.password)
    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successLoginToastMessage) 

    //clean app data
    cy.SelectSettingsOption('Resetar')
    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successResetData)
  })

  it('AccountTC01: Add account', { tags: '@smoke' }, () => {
    const accountName = `randomAccountName ${Utils.generateRandomString(4)}`
    cy.SelectSettingsOption('Contas')
    cy.InsertAccountName(accountName)
    cy.ClickSaveAccountBtn()

    cy.get(locators.TOAST_MESSAGE, { timeout: 10000 }).should('contain',toastmessagedata.successAddAccountData)
  })
})