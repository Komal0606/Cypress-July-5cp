// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import 'cypress-file-upload';

// -- This is a parent command --
 Cypress.Commands.add('login', (username, password) => {
     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
     cy.get('#txtUsername').type(username)
     cy.get('#txtPassword').type(password)
     cy.get('#btnLogin').click()
     cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
  })

  Cypress.Commands.add('validateTable', (id, value) => {
    let sum = 0
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get(`#t0${id}`).find('tr').as("tableRow")       
    cy.get('@tableRow').should('have.length',4)

    //[tr,tr,tr,tr]
    cy.get('@tableRow').each(function(el,index){
         if(index != 0){
            sum =  sum + Number(el.children().last().text())
         }
    }).then(()=>{

         expect(sum).to.equal(value)

    })

 })

Cypress.Commands.add('Orangeherm', function(userName, Password){
   cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
   cy.get('input[name = "txtUsername"]').type(userName)
   cy.get('input[name = "txtPassword"]').type(Password)
   cy.get('input[value= "LOGIN"]').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
