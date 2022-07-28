// click , check , uncheck, radiobutton


 // checkbox ---- search for the tagName input 
    // [type="checkox"]
    // [value= "option-1"] 


describe('verfiy checkbox , radio , dropDown , enabled disabled', () => {
    // checkbox ---- search for the tagName input 
    // [type="checkox"]
    // [value= "option-1"]
    it('verify the checkbox with the help of click', () => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "option-1"]').click().should('be.checked')
        cy.get('input[value= "option-1"]').click().should('not.be.checked')

    })

    it('verify the checkbox with the help of check and uncheck function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "option-4"]').check().should('be.checked')
        cy.wait(4000)
        cy.get('input[value= "option-4"]').uncheck().should('not.to.be.checked')

    })

    it('verify the multiple selection  checkbox with the help of check and uncheck function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "option-4"]').check(['option-1', 'option-2','option-3', 'option-4']).should('to.be.checked')
       
    })

    // radio button will not have method uncheck()
    // validation -----> pick one element ===> check(),click() ===> select another , it should not be.checked

    it('verify the radio button functionality by using click() function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "orange"]').click().should('to.be.checked')
        cy.get('input[value= "purple"]').should('not.to.be.checked')
    })

    it('verify the radio button functionality by using click() function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value= "orange"]').check().should('to.be.checked')
        cy.get('input[value= "purple"]').should('not.to.be.checked')
    })

    it('verify the all radio button functionality by using check() function', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('form[id = "radio-buttons" ]').find('input').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })

    })
                // cy.get('input[type ="radio"]').each(function(el){
        //     cy.wrap(el).check().should('be.checked')
        // })

        // cy.get('#radio-buttons').children().filter('input').each(function (el) {
        //     cy.wrap(el).check().should('be.checked')
        // })
        //
        
        
    it('verify the dropdown functionality', () =>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
        cy.get('#dropdowm-menu-1').select('C#').should('have.value', 'c#')
        cy.get('#dropdowm-menu-1').select('SQL').should('have.value', 'sql')
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
    })

    it('verify the multiple selection of drop down', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        let selectValues = ["SQL","Eclipes","CSS"]
        cy.get('.section-title').first().children('select').each(function(el,index){
            cy.wrap(el).select(selectValues[index]).should('have.value',selectValues[index])
        })
    })

    it('verify functionality for enabled and disable',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.enabled')

    })

    it.only('verify functionality for enabled and disable',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each(function(el,index){
            if(index != 0){
                //cy.log(cy.wrap(el).children().last().text())
                sum = sum + Number(el.children().last().text())
            }
         })
         .then(()=>{ 
            expect(sum).to.equal(163)
        })
        //cy.log(sum)
        
    })







   


})

