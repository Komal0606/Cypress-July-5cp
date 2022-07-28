

describe('to check the checkbox, radio button and dropdown', ()=>{
    it('TC_01 TO CHECK THE CHECKBOX ', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type = "checkbox"]').should('be.checked')
        cy.get('input[value = "option-4"]').should('be.not.checked')
        cy.get('input[value= "option-2"]').click().should('be.checked')
    })

    })
    it('TC_01_1 TO CHECK THE CHECKBOX ', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input[type = "checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })

    it('TC_02 TO CHECK THE RADIO BUTTON FUNCTIONALITY', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "green"]').check().should('to.be.checked')
        //cy.get('input[value= "blue"]').should('not to be checked')
        cy.get('input[value= "purple"]').should('not.to.be.checked')
        cy.get('input[value= "purple"]').click().should('be.checked')
    })

    it('TC_03 verify the of radio button',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input[type = "radio"]').each(function(el){
            cy.wrap(el).check().should(be.checked)
        })
    })

    it('TC_04 verify the of radio button',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('java').should('have.value', "java")
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', "java")
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', "maven")
    
        })
    
    // it.only('TC_05 verify the functionality og dropdown', ()=>{

    //     let values = ["python", "maven", "css"]
    //     let valueText = ["PYTHON", "MAVEN", "CSS"]
    //     cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('div[class = "section-title"]').first().children().each(function(el,index){
    //         cy.wrap(el).select(valueText[index]).should('have.value', values[index])
    //     })
    // })

    it.only('verify functionlity for the drop down',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let values = ["python","maven","css"]
        let textValues = ["PYTHON","MAVEN","CSS"]
        cy.get('[class = "section-title"]').first().children().each(function(el,index){
            cy.wrap(el).select(values[index]).should('have.value',values[index])
        })
        
    })
        
