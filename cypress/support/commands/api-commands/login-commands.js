import  RelativePath  from '../../../data/endpoint-relative-path.json';

const baserRestURL = Cypress.env('base_url_api')

Cypress.Commands.add('doLoginAPI', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.LOGIN}`,
        body: body
    }).then(response =>{
        return response
    })
})