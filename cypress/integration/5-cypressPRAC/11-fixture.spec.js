/// <reference types="cypress"/>

describe("verify the sign up from using fixture", function () {
 
    
     before(()=>{
        cy.fixture("users2").then((data)=>{
            this.data = data
        })
     })

    it("TC_01 verify the functionality for sign up", () =>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[placeholder="First Name"]').type(this.data.firstName)
        cy.get('input[placeholder="Last Name"]').type(this.data.lastName)
        cy.get('input[placeholder="Email Address"]').type(this.data.mailid)
        cy.get('textarea[placeholder="Comments"]').type(this.data.Comment)
        cy.get('input[type ="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
})
