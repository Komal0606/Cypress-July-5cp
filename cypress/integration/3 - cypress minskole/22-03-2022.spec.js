

describe('verify the funcyionality for table',function(){
   // cypress commands are async

   // cypress execution sync : internally promises resolved

   // javascript jquery sync nature will break

   // .then manually resolved to maintain the synch nature 

   it('verify the funcyionality for the table ', ()=>{
       cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
       cy.get('#t01').should('be.visible').then(function(){
            console.log('table')
       })
   })

})


it('to verify the fuctionality for login', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')
})

it('verify the functionality for login-2 customised cypress command',function(){
    cy.login('Admin','admin123')

})

it.only('verify the sum of vales of table', function(){

    cy.validateTable(1,159)
    cy.validateTable(2,163)
})






