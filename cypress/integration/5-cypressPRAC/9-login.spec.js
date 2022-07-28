describe('login', ()=>{
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

    it('verify login functionality', ()=>{
        cy.visit('https://www.zoomin.com/sign-up?%2F%27')
        cy.get('[name="name"]').type("komal")
        cy.get('[name="email"]').type("palkekomal98@gmail.com")
        cy.get('[name="number"]').eq(1).type('9607262607')
        cy.get('[name="password"]').type('palkekomal98@')
        cy.get('[class= "MuiButton-label"]').click()
        cy.get('[name = "email"]').type('palkekomal98@gmail.com')
        

    })
})