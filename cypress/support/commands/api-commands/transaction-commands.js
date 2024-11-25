import  RelativePath  from '../../../data/endpoint-relative-path.json';

const baserRestURL = Cypress.env('base_url_api')

Cypress.Commands.add('createNewTransaction', (body) =>{
    cy.request({
        method: 'POST',
        url: `${baserRestURL}${RelativePath.TRANSACTION}`,
        headers:{
            authorization: `JWT ${Cypress.env('token')}`
        },
        body: body
    }).then(response =>{
        return response
    })
})