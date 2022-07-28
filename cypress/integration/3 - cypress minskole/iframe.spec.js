// iframe  In this blog post I will show how to interact with DOM elements inside an iframe
// (even if the iframe is served from another domain)


describe('verify the iframe by jquery and javascript', () => {

    it('TC_01 verify the iframe by jquery method', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then(($el) => {
           cy.wrap( $el.contents().find('body')).as('iframebody')
           cy.get('@iframebody').should('have.attr', 'id')
           cy.get('@iframebody').find('p').click().type('hii Good Morning')
        })
    })

    it.only('TC_02 verify the iframe by javascript', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then((el) => {
            cy.wrap(el[0].contentDocument.body).as('iframeBody')
            cy.get('@iframeBody').find('p').click().type('hii be u as u r ')
        })
    })
})