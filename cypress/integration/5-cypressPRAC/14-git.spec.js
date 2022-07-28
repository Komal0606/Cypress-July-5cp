/// <reference types="cypress" />

describe('VERIFY CHECKBOX', ()=>{
    it('TC_01 TO CHECK THE CHECKBOX ', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value = "option-1"]').should('be.not.checked')
        cy.get('input[value = "option-3"]').should('be.checked')
        cy.get('input[value = "option-2"]').click().should('be.checked')
        cy.get('input[value = "option-4"]').check().should('be.checked')
    })

    it('TC_01_01 TO CHECK THE CHECKBOX  in loop ', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input[type= "checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC_02 to check Radio Buttons', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= green]').check().should('be.checked')
        cy.get('input[value= blue]').should('be.not.checked')
    })

    it('TC_02_01 to check Radio Buttons in loop', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input[type = radio]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC_03 to check dropdown', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
        cy.get('#dropdowm-menu-2').select('Eclipse').should('have.value', "eclipse")   
    })

    it('TC_03 verify functionlity for the drop down',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let values = ["python","maven","css"]
        let textValues = ["PYTHON","MAVEN","CSS"]
        cy.get('[class = "section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(values[index]).should('have.value',values[index])
        })
    })

    it.only('TC_04 verify functionlity for the enable and disable',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= lettuce]').should("be.enabled")
        cy.get('input[value= cabbage]').should("be.disabled")
    })
})