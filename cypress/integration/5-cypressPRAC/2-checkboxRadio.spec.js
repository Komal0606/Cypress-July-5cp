// on ironspider.ca website

describe('verify Checkboxes, radiobuttons, dropdown',()=> {
    it('TC_01 CHECKBOX', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('input[value="red"]').check().should('be.checked')
        cy.get('input[value="orange"]').click().should('be.checked')
        cy.get('input[value="green"]').should('be.not.checked')

    })

    it('TC_02 CHECKBOX ', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC_03 CHECKBOX', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('input[type="checkbox"]').check(['red','yellow','blue','orange','green','purple'])
    })

    it('TC_04 RADIO BUTTON', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('input[name = "browser"]').eq(0).check().should('be.checked')
        cy.get('input[name = "browser"]').eq(1).check().should('be.checked')
        cy.contains(' Mozilla').should('be.not.checked')
    })

    it('TC_05 Verify the multiple Radio button ', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('input[name = "browser"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it.only('TC_06 verify the dropdown functionality', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
        cy.get('select[name= "coffee"]')
    })

    it('TC_01 CHECKBOX', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
    })

    it('TC_01 CHECKBOX', ()=>{
        cy.visit('https://ironspider.ca/forms/checkradio.htm')
    })


    
})

