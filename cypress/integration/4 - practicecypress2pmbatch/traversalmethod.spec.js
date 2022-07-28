

describe('Taversal method', ()=>{

    it("TC_01 To check the children() method ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().should('have.length', 8)
    
    })

    it("TC_02 To check the eq() method  ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().eq(1).should('contain','Apparel & accessories')
    
    })

    it("TC_03 To check the first() method ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().first().should('contain', 'Home')
    
    })

    it("TC_04 To check the last() method ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().last().should('contain', 'Books')
    
    })

    it("TC_05 To check the parent() method ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').parent().should('have.class', 'subnav')
    
    })

    it.only("TC_05 To check the siblings() method ",()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=2"]').parent().should('have.class','dropdown')
    
    })

    

})