// Go Rest


/// <reference types="cypress" />

describe('TS_01 verify the API request', ()=>{

    it('TC_01 Verify the GET request', ()=>{

        cy.request({
            method : "GET",
            url : "https://gorest.co.in/public/v2/posts"
        }).then(function(response){
            expect(response.status).to.eq(200)
        
        })

    })

    it('TC_02 Verify the POST request', ()=> {
        cy.request({
            method : "POST",
            url : "https://gorest.co.in/public/v2/users",
           
        }).then(function(response){

            cy.log(response)
        })
    })

    it('TC_03 Verify the PUT request', ()=>{
        cy.request({
            method: 'PUT',
            url : "https://gorest.co.in/public/v2/comments"
        })
    })

    it.only('TC_04 Verify the DELETE request', ()=>{

        cy.request({
            method : 'DELETE',
            url : 'https://gorest.co.in/public/v2/todos'
        
        }).then(function(response){
            cy.log(response)
        })
    })
})