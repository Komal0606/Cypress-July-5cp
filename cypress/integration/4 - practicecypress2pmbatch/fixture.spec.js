// fixture 

// In this we create an file in fixture folder 
// in that folder we set values in json form
// access the information from that file 

// 

describe('verify the Contact us by using fixture method', function(){
   

    it('verify the testcase by using fixture', function(){
        cy.fixture('contactus').then(function(info){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.message)
            cy.get('input[value="SUBMIT"]').click()

        })
    })

    it('verify the contactus by passing array in fixture file',function(){
        cy.fixture('contactus2').then(function(info2){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info2[0].firstName)
            cy.get('input[name="last_name"]').type(info2[0].lastName)
            cy.get('input[name="email"]').type(info2[0].email)
            cy.get('textarea[name="message"]').type(info2[0].message)
            cy.get('input[value="SUBMIT"]').click()

        })
    })
    
    it.only('verify the contactus by passing array in fixture file',function(){
        cy.fixture('contactus2').then(function(info2){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info2[1].firstName)
            cy.get('input[name="last_name"]').type(info2[1].lastName)
            cy.get('input[name="email"]').type(info2[1].email)
            cy.get('textarea[name="message"]').type(info2[1].message)
            cy.get('input[value="SUBMIT"]').click()

        })
    }) 
    
     
  
})