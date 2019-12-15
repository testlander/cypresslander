/// <reference types="Cypress" />

//import BasePage from "./BasePage";

export class Validations
{
    validatePageTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }

    isPageTitleVisible() {
        cy.title().should('be.visible');
    }
}

export const validations = new Validations();