// we use config to change the cypress default configuration
// 1 = config : cypress.json
// we visit url from cypress.json 
//  in cypress.json we set the default url
// if we mention the url in cy.visit then it will not going to access the url from cypress.json
// use forword slash (/) or blank ("")

// 2 == 
// other method to overwrite is to run the command in terminal 
// 3 ==
// we can't remember the command so we create tags in package.json file in script
// eg = "local" : "npx cypress run --headed --config baseUrl=\"https://www.youtube.com\""
// and run as npm run tagname (npm run local)
// 4 == 
// we can create the diff config files other the diff stages like canary, production, local, staging etc
// and set the default url u want { 
    // "extends" : "./cypress.json",
    // baseUrl : "www.google.com"
//}

// 5 == 
// next method by using utility
// in this we create object in utility folder (creat utility folder into support folder)
// add conditions in that object and run in command line

describe ("leran config", ()=>{
    it("TC_01", ()=>{
        cy.visit('/')
    })
})