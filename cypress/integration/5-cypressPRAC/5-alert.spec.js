describe('js alert', function(){
    it("TC_01 JS ALERT", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on("window:alert", (str)=>{
            expect(str).to.eq('I am a JS Alert')
        })
        cy.get('#result').should('be.visible')
    })

    it("TC_02 JS confirm", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('be.visible')
    })

    it("TC_03 JS confirm for cancel", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick = "jsConfirm()"]').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equals('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('TC_04 JS Prompt/ confirm js Prompt for ok ', function (){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((el) => {
            cy.stub(el, 'prompt').returns("Hii GOOD MORNING")
           // cy.get('button[onclick = "jsPrompt()"]').click()
            cy.contains(/^Click for JS Prompt/).click()
    
        })
            cy.get('#result').should('contain', "Hii GOOD MORNING")
       
    })

   
  
})