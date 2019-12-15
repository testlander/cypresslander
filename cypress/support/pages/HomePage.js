/// <reference types="Cypress" />

//import BasePage from "./BasePage";

export class HomePage
{
    //--------------------------------------ELEMENTS--------------------------------------\\

    getPageTabs() {
        return cy.get('#pages-nav')
    }

    getSearch() {
        return cy.get('#searchTerm');
    }

    getSignInButton() {
        return cy.get('#signin_button');
    }

    getOnlineBankingFeatures() {
        return cy.get('#online_banking_features');
    }

    getMoreServices() {
        return cy.get('#online-banking');
    }

    getFooterSection() {
        return cy.get('.span4');
    }
 
    //--------------------------------------VALIDATIONS--------------------------------------\\

 
    //--------------------------------------ACTIONS--------------------------------------\\


}

export const homePage = new HomePage();