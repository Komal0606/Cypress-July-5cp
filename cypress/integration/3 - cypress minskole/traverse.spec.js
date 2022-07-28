//<h1 id = "one" class = "two" name = "nm"> HeadingOne </h1>


// Traversal method - Traversal is a process to visit all the nodes of a tree and may print their values too

//.eq(), .first(), .last() , .childrens(), .prev(), .prevAll(), .next(), .nextAll(), .filter(), .siblings()


describe('traverse method in cypress', function(){
       
    it('To get a DOM element at a specific index, use the .eq() command.',function(){ 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').should('have.length',12 )
        cy.get('th').eq(1).should('have.text', "Lastname")
        cy.get('th').eq(7).should('have.text', "First")
        cy.get('th').eq(10).should('have.text', 2)
    })
    
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').first().should('have.text', "Firstname")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('th').last().should('have.text',3)
    })
    
    it('To get children of DOM elements, use the .children() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class = "breadcrumb traversal-breadcrumb"]').children().should('have.length', 3)
        //cy.get('ul[class = "list-group"]').children().should('have.text', 2)- (ask someone)
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id = "tea"]').next().should('have.text', "Milk")
    })
    
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id = "tea"]').prev().should('have.text',"Coffee")
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id = "espresso"]').prevAll().should('have.length', 3)
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextAll().should('have.length', 3)
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('input[type="button"]').siblings().should("have.length", 4)
    })
    
    it('To get the closest ancestor DOM element, use the .closest() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class = "list-group"]').closest('div').should('have.class', "thumbnail")
    
    })
    

    it('To get parents DOM element of elements, use the .parents() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#main-header').parents().should('have.length', 3)
    
    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-marked-text').parentsUntil().should('have.length', 5)
    
    })

    it.only('To get DOM elements that match a specific selector, use the .find() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-other-states').find('.btn btn-primary active')
        .should('have.text', 'Button-1')
    
    })

    

    

    


  
    




})