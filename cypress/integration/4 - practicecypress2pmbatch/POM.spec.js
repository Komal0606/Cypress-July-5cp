// POM - PAGE OBJECT MODULE
// it keeps the object and methods separate by test script
// increase reusability 

import {Login_page} from "./login.pom.spec"

const login = new Login_page()

describe( 'login functinality by using POM method', () =>{

    it("login page by POM method", () => {
        login.navigation()
        login.enterUsername()
        login.enterPassword()
        login.LoginClick()
    })


    
})
