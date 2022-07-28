const { describe } = require("mocha");

describe('practice of fixture', function(){

    let info2 ;
    before(function(){
        cy.fixture(contactus2).then(function(data){
          info2 = data
        })

    })

    it('verify the contactus by passing array in fixture file',function(){
    
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info2[0].firstName)
            cy.get('input[name="last_name"]').type(info2[0].lastName)
            cy.get('input[name="email"]').type(info2[0].email)
            cy.get('textarea[name="message"]').type(info2[0].message)
            cy.get('input[value="SUBMIT"]').click()
    })

    it.only('verify the contactus by passing array in fixture file',function(){
    
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info2[1].firstName)
            cy.get('input[name="last_name"]').type(info2[1].lastName)
            cy.get('input[name="email"]').type(info2[1].email)
            cy.get('textarea[name="message"]').type(info2[1].message)
            cy.get('input[value="SUBMIT"]').click()

    }) 


})