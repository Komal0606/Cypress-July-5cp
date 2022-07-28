describe('ALERTS', function(){
    it('TC_01 JS alert', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click
        cy.on('window:alert', (el)=>{
            expect(el).to.eq('I am an alert box!')
            return true
        })
        
    })

    it('TC_02 JS alert', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            let kko = el.alert()
            expect(kko).to.eq(true)
        })
    })

    it('TC_03 JS confirm', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            cy.expect(str).to.eq('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('TC_04 JS confirm', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            cy.expect(str).to.equals('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')

        
    })

    it('TC_05 JS confirm by using cy.window', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el)=>{
            cy.stub(el, 'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('TC_06 JS alert', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el)=>{
            cy.stub(el, 'confirm').returns(false)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it.only('TC_07 alert practice ', ()=>{
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert')
        // cy.contains('Try it').click()
        // cy.on('window:alert', (el)=>{
        //     expect(el).to.eq('Hello! I am an alert box!')
        //     return true
        // })
    })
  
  
})