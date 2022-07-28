/// <reference types="cypress" />

describe('upload file', ()=>{
    let filepath = 'Capture.jpg'
    let filepath01 = 'Capture.jpg'

    it('TC_01 UPLOAD FILE on webdriver web', ()=>{ 
        cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(filepath)
        cy.get('#submit-button').click()
        cy.url().should('contain', filepath)
    })

    it('TC_02 upload file Example - 02', ()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        //cy.get('#id_contact').children().eq(1).select('Customer service').should('have.attr', '2')
        cy.get('#fileUpload').attachFile(filepath)
        cy.get('[class="filename"]').invoke('text').should('contain', filepath)
    })

    it.only('TC_03 upload file Example - 03', ()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('[type="hidden"]').attachFile(filepath)
        cy.get('.box__success').should('contain', 'Done')
    })

    it.only('TC_04 upload multiple file Example -04' , ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile([filepath , filepath01])
        cy.get('#fileList').children().should('have.length', 2)
    })

})