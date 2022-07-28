// API 
/// <reference types="cypress" />


describe("Verify the API on regress", function(){
    it.only("TC_01 Verify the get request", function(){
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2"

        }).then(function(response){
           cy.log(response)
           //expect(response.status).to.eq(200)
           //expect(response.requestHeaders.Connection).to.eq("keep-alive")
           expect(response.body.data.forEach(function(el){
               expect(el).to.have.property("email")
               expect(el).to.have.property("first_name")
           }))

           expect(response.body.data.forEach(function(element){
               expect(element).to.have.all.keys("email", "id","first_name", "last_name","avatar")
           }))
        })

    })

    it("TC_02 Verify the post request", function(){
        cy.request({
            method : "POST",
            url : "https://reqres.in/api/users",
            body : {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.headers.server).to.eq("cloudflare")
        })
    })

    it("TC_03 Verify the PUT request", function(){
        cy.request({
            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body : {
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
        })
    })

    it("TC_04 Verify the DELETE request", function (){
        cy.request({
            method : "DELETE",
            url : "https://reqres.in/api/users/2",
        
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eq(204)
            expect(res.statusText).to.eq("No Content")
        })
    })




})