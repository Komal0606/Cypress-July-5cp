// travesal method on belora paris
/// <reference types="cypress" />

describe("TRAVERSAL METHOD", function(){
    it("TC_01 .eq() method", ()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('li').eq(1).should('have.text', "Tailormade Holidays : 1800 22 9080")
        
})

it("TC_02 .first() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get("li").first().should('have.text', "Group Tours : 1800 22 1100")
    
})

it("TC_03 .last() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('li').last().children().should('have.attr', "href", "tel:1800 22 1100")
    
})

it("TC_04 .next() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('.topnav__top').next().should('have.class', 'container')
    
})

it("TC_05 .prev() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('.container').prev().should('have.class', "topnav__top")
    
})

it("TC_06 .children() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('[class="menu list-unstyled mb-0"]').children().should('have.length', 11)
    
})

it("TC_07 .preAll() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('[id="tailor-made-holidays"]').prevAll().should('have.length', 3)
    
})

it("TC_08 .nextAll() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('[id="tailor-made-holidays"]').nextAll().should('have.length', 7)
    
})

it.only("TC_09 .parent() method", ()=>{
    cy.visit('https://www.kesari.in/')
    cy.get('[id="tailor-made-holidays"]').parent().should('have.attr', "class", 'menu.list-unstyled mb-0')
    
})


})