/// <reference types="Cypress" />
//it.only - runs only this test case - for debug purposes

describe("Project",()=>{
    it("Formula1.com - Suscribe button is working",()=>{
        cy.viewport(1280, 720);
        cy.visit("https://www.formula1.com/");
        cy.get('.pitch-link').click({force:true});
    })

    it("Formula1.com - Sign In functionality is working",()=>{
        cy.viewport(1280, 720);
        cy.visit("https://www.formula1.com/");
        cy.get('.sign-in > .login-link').click({force:true});
        cy.get("#loginform > div:nth-child(2) > input").type("lucian95@gmail.com");
        cy.get('.txtPassword').type("123456!");
        cy.get('#loginform > .actions > .btn').click({force:true})
        cy.get('.loggedin-user').click({force:true});
        cy.get('.user-name').should("contain","Lucian Calinescu");
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
      
          

    })

    it("Formula1.com - Current driver standings is shown",()=>{
        cy.viewport(1280, 720);
        cy.visit("https://www.formula1.com/");
        cy.get("#primaryNav > div > div.primary-links > ul > li:nth-child(4) > div > div > div > div > div > a:nth-child(2)").click({force:true});
        cy.get('.ResultsArchiveTitle').should("contain","2020 Driver Standings");
        
    })

    it("Formula1.com - Full Standings Button is working - Home Page",()=>{
        cy.viewport(1280, 720);
        cy.visit("https://www.formula1.com/");
        cy.get('.active > .container > .col-xl-10 > .btn').click({force:true});
        cy.get('.ResultsArchiveTitle').should("contain","2020 Driver Standings");
    })
    
    it("Formula1.com - Legal Links - Footer Home Page",()=>{
        cy.viewport(1280, 720);
        cy.visit("https://www.formula1.com/");
        cy.get('.f1-legal-links > .f1-nav__item--has-children > ul > :nth-child(7) > a > .f1-nav__underline').click({force:true});
        cy.get('.f1-legal-links > .f1-nav__item--has-children > ul > :nth-child(7) > a > .f1-nav__underline').should("contain","Legal Notices");

    })
});