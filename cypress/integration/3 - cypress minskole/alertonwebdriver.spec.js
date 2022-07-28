// Alert

describe('verify JS alerts', function () {
    it('verify the JS alert', function () {
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equals('I am an alert box!')

        })
    })

    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            let kko = el.alert()
            expect(kko).to.eq(true)
        })

    })

    it('verify the js window : javascript confirm box for ok()', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window : confirm', (str) => {
            expect(str).to.equals('Press a button!')
            return true
        })

        cy.get('p[id="confirm-alert-text"]').should('have.text', 'You pressed OK!')

    })

    it('verify the js window : javascript confirm box for ok()', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false
        })

        cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")

    })
    
    it('verify the js window:alert for confirm', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            cy.stub(el, 'confirm').returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")

    })

    it.only( 'to verify the js window : for confirm by using cy.window methos', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then((el) => {
            cy.stub(el, 'confirm').returns(false)
        
        })

        
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")

    })







})