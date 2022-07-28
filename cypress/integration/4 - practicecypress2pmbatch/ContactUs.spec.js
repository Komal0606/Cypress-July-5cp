// Using Jquery

//import { it } from "mocha"

describe('verify the contact us along with navigation', function(){
    it('TC_01 Verify the contact us form ', function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function(string){
            expect(string).to.eqls('CONTACT US')
        })

        cy.get('input[placeholder= "First Name"]').type('Komal')
        cy.get('input[placeholder= "Last Name"]').type('Palke')
        cy.get('input[placeholder= "Email Address"]').type('komalpalke47@gmail.com')
        cy.get('textarea[placeholder= "Comments"]').type('Hello good morning')
        cy.get('input[value= "SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('TC_02 Verify the contact us form : RESET', function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function(string){
            expect(string).to.eql('CONTACT US')
        })
        cy.get('input[placeholder = "First Name"]').type('komal')
        cy.get('input[placeholder= "Last Name"]').type('Palke')
        cy.get('input[placeholder= "Email Address"]').type('komalpalke47@gmail.com')
        cy.get('textarea[placeholder= "Comments"]').type('Hello good morning')
        cy.get('input[value= "RESET"]').click()
        cy.get('input[placeholder = "First Name"]').should('have.text', "")
        cy.get('input[placeholder= "Last Name"]').should('have.text', "")
        cy.get('input[placeholder= "Email Address"]').should('have.text', "")
        cy.get('textarea[placeholder= "Comments"]').should('have.text', "")
    })

    it('TC_03 Verify the contact us form : invalid credentials ', function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function(string){
            expect(string).to.eqls('CONTACT US')
        })

        cy.get('input[placeholder= "First Name"]').type('Komal')
        cy.get('input[placeholder= "Last Name"]').type('Palke')
        cy.get('input[placeholder= "Email Address"]').type('komalpalke47gmail.com')
        cy.get('textarea[placeholder= "Comments"]').type('Hello good morning')
        cy.get('input[value= "SUBMIT"]').click()
        cy.get('html').should('contain', "Invalid")

    })

    it.only('TC_04 Verify the contact us form :should field all credentials ', function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').should('have.text', 'CONTACT US')
        cy.get('.section_header').invoke('text').then(function(string){
            expect(string).to.eqls('CONTACT US')
        })

        cy.get('input[placeholder= "First Name"]').type('Komal')
        cy.get('input[placeholder= "Last Name"]').type('Palke')
        cy.get('input[placeholder= "Email Address"]').type('komalpalke47gmail.com')
        cy.get('input[value= "SUBMIT"]').click()
        cy.get('html').should('contain', "all fields")
    })


})