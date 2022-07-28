//<h1 id = "one" class = "two" name = "nm"> HeadingOne </h1>

// Traversal method - Traversal is a process to visit all the nodes of a tree and may print their values too

//.eq(), .first(), .last() , .childrens(), .prev(), .prevAll(), .next(), .nextAll(), .filter(), .siblings()

    // <h1 class = "one" id = "name" name = "nm">hello</h1>
     //.should('have.class','one')
      //.should('have.id','name')
      //.should('have.attr','name',"nm")
      //.should('have.text','hello')
      //.should('contain','hel')
      //.should('have')
describe('traversal method in javascript', function(){
    //1 
    it('TC_01 To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('.et_pb_text_inner>').children().should('have.length', 7)

    })
      // closest goes from child to parents
    it('TC_02 To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('#menu-item-216747').closest('#menu-footer-menu').should('have.id', 'menu-footer-menu')

    })

    it('TC_03 To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('#menu-footer-menu').children().eq(7).should('have.id', 'menu-item-216842')
        cy.get('#menu-footer-menu').children().eq(0).should('have.text', 'About')
        
    })

    it('TC_04 To get descendant DOM elements of the selector, use the .find() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get(".et_pb_text_inner").children()
            .find('a:first').should('have.contain', 'Big page with many elements')
        //cy.get(".et_pb_text_inner").children()
           // .find('a:first').should('have.contain', 'Fake Landing Page')   
    })
         //ask
    it('TC_05 To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get(".et_pb_text_inner>ul").children().filter('li:last')
        .should('have.contain', 'Interactions with simple elements')

    })

    it('TC_06 To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('ul[id="menu-footer-menu"]').children().first('li')
            .should('have.text', 'About')

    })

    it('TC_07 To get the first DOM element within elements, use the .last() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('ul[id="menu-footer-menu"]').children().last('li')
            .should('have.text', 'Contact Us')
    })

    it('TC_08 To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
       cy.get('.et_pb_text_inner>ul').children().eq(2).next()
          .should('have.text', 'Fill out forms')
       // ask cy.get('et_pb_text_inner>ul').children().eq(1).next().should('have.text', 'Fake Pricing Page')    

    })

    it('TC_09 To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('.et_pb_text_inner>ul>li').nextAll().should('have.length', 6)

    })

    it.only('TC_010 To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('https://courses.ultimateqa.com/collections')
        cy.get('.products_list-item').nextUntil('.course-card_img-container:last')
            .should('have.length', 5)

    })

})