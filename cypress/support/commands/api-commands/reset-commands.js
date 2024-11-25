import  RelativePath  from '../../../data/endpoint-relative-path.json';

const baserRestURL = Cypress.env('base_url_api')

Cypress.Commands.add('resetApp', () =>{
    cy.request({
        method: 'GET',
        url: `${baserRestURL}${RelativePath.RESET}`,
        headers: { Authorization: `JWT ${Cypress.env('token')}`},
    }).then(response =>{
        return response
    })
})