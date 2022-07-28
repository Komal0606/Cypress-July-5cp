// iframe in webdriver

// cypress does not support iframe so we solve this with jquery and javascript
// in jquery we use .contents() method and in js we use contentDocument method
// steps = visit url => find iframe => use promises (.then) => wrap the el bcoz el is not cypress el =>
// => el.content() / el.contentDocument we reach to iframe document => then reach to body => after that use alias for ref 
// => reach to required el by using traveral method and asert
/// <reference types = "cypress" />

describe("Verify IFRAME", ()=>{
    it('TC_01 Verify Iframe by jquery method', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            cy.wrap(el.contents().find("body")).as('IframeBody')
            cy.get("@IframeBody").find('li[class="active"]').eq(1).should('contain', 'Home')
        })
    })

    it('TC_02 example 02', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(el){
            cy.wrap(el.contents().find("body")).as('iframebody1')
            cy.get('@iframebody1').find('#slide-image-3').should('have.class', 'slide-image')
        })
    })

    it('TC_03 example 03', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            cy.wrap(el.contents().find('body')).as('iframe2')
            cy.get("@iframe2").find('.section-title').eq(1).should('contain', 'GREAT SERVICE!')
        })
    })

    //                         ::: BY USING JAVASCRIPT :::

    it('TC_04 verify iframe by javascript', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((el)=>{
            //cy.log(el)
            cy.wrap(el[0].contentDocument.body).as('iframeBY') //check on test runner by inspecting = 0 is property contentDocument is a object 
            cy.get('@iframeBY').find('li[class="active"]').eq(1).should('contain', 'Home')
        })
    })

    it.only('TC_05 verify iframe Example 02', ()=>{
        cy.get('#frame').then((el)=>{
            //cy.log(el)
            cy.wrap(el[0].contentDocument.body).as('iframeBY2')
            cy.get('@iframeBY2').find('.section-title').eq(2).should('contain', 'Why Choose Us?')
        })//Timed out retrying after 4000ms: Expected to find element: #frame, but never found it.
    })
})

