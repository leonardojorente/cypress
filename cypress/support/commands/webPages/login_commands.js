import locators from '../../locators.js';

Cypress.Commands.add('InsertEmail', (email) =>{
    cy.get(locators.LOGIN_SCREEN.EMAIL_INPUT).clear()
    cy.get(locators.LOGIN_SCREEN.EMAIL_INPUT).type(email)
})

Cypress.Commands.add('InsertPassword', (password) =>{
    cy.get(locators.LOGIN_SCREEN.PASSWORD_INPUT).clear()
    cy.get(locators.LOGIN_SCREEN.PASSWORD_INPUT).type(password)
})

Cypress.Commands.add('ClickLoginButton', () =>{
    cy.get(locators.LOGIN_SCREEN.LOGIN_BTN).click()
})

Cypress.Commands.add('Login', (email, password) =>{
    cy.InsertEmail(email)
    cy.InsertPassword(password)
    cy.ClickLoginButton(password)
})