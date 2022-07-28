export class Login_page {

    navigation(){
        cy.visit("https://trytestingthis.netlify.app/")

    }
    enterUsername(){
        cy.get('#uname').type('test')

    }
    enterPassword(){
        cy.get('#pwd').type('test')

    }
    LoginClick(){
        cy.get('input[type = "submit"]').click()

    }
}