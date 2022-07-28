/// <reference types="cypress" />

describe('Drpodown method', ()=>{

    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false
    })

    it("TC_01 dropdown on lonavala cab", ()=>{
        cy.visit("https://www.lonavalacab.com/")
        cy.get('#package').last().select("Full Sightseeing").should('have.value', "Full Sightseeing")
        cy.get('#package').last().select('Super Deluxe').should('have.value', 'Super Deluxe')
        cy.get('#package').last().select('Pune drop').should('contain', "Pune drop")

    })
    it("TC_02 dropdown on lonavala cab", ()=>{
        cy.visit("https://www.lonavalacab.com/")
        cy.get('#car').select('4 Seater').should('have.value', "1")
        cy.get('#car').select('3').should('contain', '17 Seater')

    })

    
it("TC_03 select multiple dropdown on lonavala cab", ()=>{
    cy.visit("https://www.lonavalacab.com/")
    let selectText = ["Waterfall Special", "4 Seater"]
    cy.get('.form-control.tm-select').each((el,i)=>{
        cy.wrap(el).select(selectText[i]).should('contain', selectText[i])
    })

})

it("TC_05 select multiple dropdown on lonavala cab", ()=>{
    cy.visit("https://www.lonavalacab.com/")
    let selectText = ["Waterfall Special", "4 Seater"]
    let values = ['Waterfall Special', '1']
    cy.get('.form-control.tm-select').each((el, i)=>{
        cy.wrap(el).select(selectText[i]).should("contain", selectText[i])
    })

})

it.only("TC_06 Dynamic dropdown on lonavala cab", ()=>{
  cy.visit('https://paytm.com/train-tickets')
  cy.get('[id="text-box"]').first().click()
  cy.get('[class="_16Y_"] ._3ewH ._3sXO').each((el)=>{

       let stat=el.text()
       cy.log(stat)

     if(stat=="Delhi- All Stations") {
      cy.wrap(el).click()
     } 
  })

})

it.only('Tc-07 To test dependent dropdown',()=>{
    cy.visit("https://www.coderglass.com/jquery/demo/country-state-city-dropdown/")
    cy.get('#country').select('Algeria')
    cy.get('#state').select('Alger').then((el)=>{
        cy.get('#city').select('Alger').should('have.value', "2836")
    })
  

})

})