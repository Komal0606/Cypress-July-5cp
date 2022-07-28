


// Test scenario  - scenario is one


// TS_01 - 
// validate the login functionality 

// Test cases - multiple test cases 

//TC_01
// check with valid credentials.
// check with invalid credentials.

describe('Validate the login functionality', function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    it('check login function for zoomin',function(){
        cy.visit('https://www.zoomin.com/sign-up?%2F')
        cy.get('input[name="name"]').type('komal1010')
        cy.get('input[name="email"]').type('komalpalke47@gmail.com')
        cy.get('input[class="number-input"]').type("9907262607")
        cy.get('input[name="password"]').type('komal47478@')
        cy.contains('SIGN UP').click()

    })

    // it.only('check login function for zoomin',function(){
    //     cy.visit('https://www.zoomin.com/sign-up?%2F')
    //     cy.get('input[name="name"]').type('chinmay010')
    //     cy.get('input[name="email"]').type('chinmay7nov@gmail.com')
    //     cy.get('input[class="number-input"]').type("7709192442")
    //     cy.get('input[name="password"]').type('@Chinmay123')
    //     cy.contains('SIGN UP').click()
    //     cy.get('a[href="/sign-up?%2F"]').should('be.visible')
    // })


})