// using commands.js    


describe('login function', function(){
    // it('login of orangeherm', function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    //     cy.get('input[name = "txtUsername"]').type('Admin')
    //     cy.get('input[name = "txtPassword"]').type('admin123')
    //     cy.get('input[value= "LOGIN"]').click()
    //     cy.get('h1').should('be.visible', "Dashboard")
    // })

    //   it('login of orangeherm', function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    //     cy.get('input[name = "txtUsername"]').type('Admin')
    //     cy.get('input[name = "txtPassword"]').type('adm123')
    //     cy.get('input[value= "LOGIN"]').click()
    //     cy.get('h1').should('be.visible', "Dashboard")
    // })

    // to avoid reapetation of code we set the reapeated code in to the commands.js file 
    // and access here by using cy.nameofcommand() / pass the values into the paranthesis.

    it('login of orangeherm', function(){
        cy.Orangeherm('Admin', 'admin123')
        cy.get('h1').should('be.visible', "Dashboard")
    })

    it.only('login of orangeherm', function(){
        cy.Orangeherm('Admin','adm123')
        cy.get('#spanMessage')
        .should('be.visible')
        .and('have.text','Invalid credentials')
    })
})