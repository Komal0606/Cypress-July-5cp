

describe('TS_01 describe the functionality for Intercept', ()=>{

    it('TC_01 verify the fuctionality for the GET comment', function(){

        cy.intercept({
            method : "GET",
            url : "https://example.cypress.io/commands/network-requests"
        }).as('getComment')
    
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium enim')

    })

    it.only('TC_02 veriy the functionality for POST comment', function(){
        cy.intercept({
            method : "POST",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains(/^Post Comment$/).click()
        // cy.wait('@postComment').then(function(res){
        //     expect(res.response.statusCode).to.eq(201)
        //     cy.get('.network-post-comment')
        //     .should('be.visible')
        //     .and('have.text','POST successful!')
        // })
        cy.wait('@postComment').then(function(res){
            //cy.log(res)
            expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment')
            .should('be.visible')
            .and('have.text','POST successful!')
        })
    })
})