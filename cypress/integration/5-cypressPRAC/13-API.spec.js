//API-----APPlication Programming Interface
//Validate response when User Interface is not ready
//Webdriver----API
describe('API test', ()=>{
    it('TC_01 Get method', ()=>{
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users/2"
        }).then((response)=>{
            //cy.log(response)
           expect(response.status).to.eq(200)
        })

    })
    it('TC_02 Get method', ()=>{
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2"
        }).then((res)=>{
                res.body.data.forEach(element => {
                    expect(element).to.have.all.keys("email", "id","first_name","last_name","avatar")
                    
                })

                
            })
        })

        it('TC_03 POST Method', ()=>{
            cy.request({
                method : "POST",
                url : "https://reqres.in/api/users",
                body : {
                    "name": "morpheus",
                    "job": "leader"
                } 
            }).then((res)=>{
                cy.log(res)
                expect(res.status).to.eq(201)
                expect(res.body.job).equals("leader")
            })

        })

        it("TC_04 PUT method", ()=>{
          cy.request({
            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body : {
                "name": "morpheus",
                "job": "zion resident"
            }
          }).then((res)=>{
            cy.log(res)
            expect(res.body.name).eq("morpheus")
            expect(res.statusText).equals('OK')
          })
        })

        it.only("TC_05 Delete method", ()=>{
            cy.request({
                method : "DELETE",
                url : "https://reqres.in/api/users/2"
            }).then((res)=>{
                //cy.log(res)
                expect(res.status).within(200, 300)
            })
        })
    })