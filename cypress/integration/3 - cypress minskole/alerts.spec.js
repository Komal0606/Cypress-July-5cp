describe('Js alerts',()=>{
    it.only('normal js alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equals('I am a JS Alert')
        })
        cy.get('#result').should('be.visible')

    })

    it('confirm js alert for cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')

    })
    it('confirm js alert for ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('prompt js alert for ok',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

        // stub driver
        it('prompt js alert for ok',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            
            cy.window().then((el)=>{
                cy.stub(el,'prompt').returns("Hello I am new")
                cy.contains(/^Click for JS Prompt/).click()
            })
            
            cy.get('#result').should('contain','Hello I am new')
           
        })

        it('prompt js alert for ok',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            
            cy.window().then((el)=>{
                cy.stub(el,'confirm').returns(true)
                cy.contains('Click for JS Confirm').click()
                cy.get('#result').should('have.text','You clicked: Ok')
            })
           
        })
    



})