

/// <reference types="cypress" />

describe('TS_01 verify the API request', ()=> {

    it('TC_01 verify the GET request for list of user page wise', ()=>{
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2"
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(response.body.data.length)
        })
    })

    it('TC_02 verify the GET request for list of user page wise', ()=>{
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2"
        }).then(function(response){
            // expect(response.body.data.forEach(element => {
            //     expect(element).to.have.property("email")
            //     expect(element).to.have.property("id")
            //     expect(element).to.have.property("first_name")
            //     expect(element).to.have.property("last_name")
            //     expect(element).to.have.property("avatar")

            response.body.data.forEach(element => {
                expect(element).to.have.all.keys("email", "id","first_name","last_name","avatar")
                
            })
        })

    })

    it('TC_03 verify the POST request for list of user page wise', ()=>{

        cy.request({
            method: "POST",
            url : "https://reqres.in/api/users",
            body : {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body).to. have.property("id")

        
        })
        
    

    })

    it('TC_04 verify the PUT request for list of user page wise', ()=>{

        cy.request({
            method: "PUT",
            url : "https://reqres.in/api/users/2",
            body : {
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
        })

    })

    it.only('TC_05 verify the DELETE request for list of user page wise', ()=>{

        cy.request({
            method : "DELETE",
            url : "https://reqres.in/api/users/2"
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(204)
        })

    })

})