<ul>    
    <li>
        <div>
            <button></button>
        </div>
        <div></div>
    </li>
    <li></li>
    <li></li>
    <li></li>
</ul>

describe("TRAVERSAL METHOD", function(){
    it("TC_01 .eq() method", ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').should('have.length', 12)
        cy.get('th').eq(2).should('have.text', 'Age')
    })

    it('TC_02 .first()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text', 'Firstname')
        

    })

    it('TC_03 .last()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text', '3')

    })

    it('TC_04 .children()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class = "traversal-drinks-list"]').children().should('have.length', 5)
        cy.get('ul[class = "traversal-drinks-list"]').children().first().should('have.text', 'Coffee')
    })

    it('TC_05 .siblings()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').siblings().should('have.length', 4)
    })

    it('TC_06 .next()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').next().should('have.text', 'Milk')
        cy.get('#tea').next().should('have.attr', "id" ,'milk')
    })

    it('TC_07 .prev()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prev().should('have.text', 'Coffee')
        cy.get('#tea').prev().should('have.attr', "id" ,'coffee')
    })

    it('TC_07 .prevAll()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prevAll().should('have.length', 1)
        cy.get('#tea').prevAll().should('have.attr', "id" ,'coffee')
        cy.get('#milk').prevAll().should('have.length', 2)
    })

    it('TC_08 .nextAll()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextAll().should('have.length', 3)
        cy.get('#tea').nextAll().should('have.attr', "id" ,'milk', "espresso", "sugar")
        cy.get('#milk').nextAll().should('have.length', 2)
    })

    it('TC_09 .filter()', ()=>{
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')

    })


    it('TC_10.find() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-other-states').find('.btn btn-primary active')
        .should('have.text', 'Button-1')
    
    })

    
    it('TC_11 .parent() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Button-3').parent().should('have.class', 'btn-group btn-group-toggle')
    
    })

    it('TC_12 .parents() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Button-3').parents().should('have.length',7)
    
    })

    it.only('TC_13 .closest() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class = "list-group"]').closest('div').should('have.class', "thumbnail")
    
    })

    

})