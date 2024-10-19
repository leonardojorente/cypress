import '../../support/commands/endPointCommands/SigninCommands.js'
import signinEndpointBody from '../../testData/SigninEndPointBodyData.js'

describe('API Login Tests', () => {
  it('LoginTC01: Success Login only showing assertion', { tags: 'smoke' }, () => {
    cy.login('cypresstest@gmail.com', 'cypress').then(response =>{
      expect(response.status).to.be.equal(200)
      expect(response.body).to.have.property('token')
    })
  })

  it('LoginTC02: Success Login whole code', { tags: 'smoke' }, () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body:{
          email: 'cypresstest@gmail.com',
          redirecionar: false,
          senha: 'cypress'
      }
    }).its('body.token').should('not.be.empty')
  })

  it('LoginTC03: Success Login using Json for body - best solution', { tags: 'smoke' }, () => {
    signinEndpointBody.email = 'cypresstest@gmail.com'
    signinEndpointBody.senha = 'cypress'
    
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body:signinEndpointBody
    }).its('body.token').should('not.be.empty')
  })

})
    
    
