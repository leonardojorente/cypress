import '../../support/commands/endPointCommands/SigninCommands.js'
import '../../support/commands/endPointCommands/AccountCommands.js'
import Utils from '../../support/commands/utils/utils_commands.js'

let token
describe('Account EndPoint Tests', () => {
  before(() => {
    token = cy.getToken("cypresstest@gmail.com", "cypress").then( tkn =>{
      token = tkn
    })
  })

  it('AccountTC01: Add Account', { tags: 'smoke' }, () => {
    const accountName = `randomAccountName ${Utils.generateRandomString(4)}`
    
    
      cy.createAccount(accountName, token).then(response =>{

        expect(response.status).to.be.equal(201)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('nome', accountName)
      })
    
  })

  it('AccountTC02: Add Account whole code', { tags: 'smoke' }, () => {
    const accountName = `randomAccountName ${Utils.generateRandomString(4)}`

    cy.getToken("cypresstest@gmail.com", "cypress").then( token =>{
      cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/contas',
        headers: { Authorization: `JWT ${token}`},
        body:{
          nome: accountName
        }
      }).as('response')
    })

    cy.get('@response').then(res => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('nome', accountName)
    })
  })

})
    
    
