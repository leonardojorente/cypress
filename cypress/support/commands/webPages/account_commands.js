const InputAccountName = "input[aria-label='Nome da conta']"
const SaveAccountBtn = "button[alt='Salvar']"

Cypress.Commands.add('InsertAccountName', (accountName) =>{
    cy.get(InputAccountName).clear()
    cy.get(InputAccountName).type(accountName)
})

Cypress.Commands.add('ClickSaveAccountBtn', () =>{
    cy.get(SaveAccountBtn).click()
})