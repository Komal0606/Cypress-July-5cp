// Alert practise 

describe('JS alerts', function(){

    it('normal js alert', function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[ onclick = "jsAlert()"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to .equals('I am a JS Alert')

        })
        cy.get('#result').should('be.visible')

    })

    it('JS confirm/ confirm js alert for ok ', function (){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick = "jsConfirm()"]').click()
        cy.on('window:confirm', (str) =>{
            expect(str).to.equals('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('JS confirm/ confirm js alert for cancel ', function (){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick = "jsConfirm()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equals('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    // stub driver - u can add sentence forcefully by using stub()

    it.only('JS Prompt/ confirm js Prompt for ok ', function (){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns("Hii this is komal")
           // cy.get('button[onclick = "jsPrompt()"]').click()
            cy.contains(/^Click for JS Prompt/).click()
    
        })
            cy.get('#result').should('contain', "Hii this is komal")
       
    })


})