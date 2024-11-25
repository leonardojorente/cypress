import  RelativePath  from '../../../data/endpoint-relative-path.json';

const baserRestURL = Cypress.env('base_url_api')

Cypress.Commands.add('createAccount', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.ACCOUNT}`,
        headers: { Authorization: `JWT ${Cypress.env('token')}`}, // use env variable token
        body: body
    }).then(response =>{
        return response
    })
})