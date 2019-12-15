/// <reference types="Cypress" />

class BasePage
{

    //cy.wait(3000); //static wait
    //cy.pause();
    waitUntil(miliseconds) {
        cy.wait(miliseconds);
    }

    pausetTest() {
        cy.pause();
    }
}

//export const basePage = new BasePage();