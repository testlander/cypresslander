/// <reference types="Cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import {homePage} from "../../../support/pages/HomePage";
import {validations} from "../../../support/pages/Validations";
import "@percy/cypress";


Given('I visit Zero Bank web site', () =>{
    cy.visit(Cypress.env('mainUrl'));
})

Then('I validate homepage title as {string}', (pageTitle) => {
    validations.validatePageTitle(pageTitle);
})

And('I validate homepage has {string} tabs', (tabCount) => {
    homePage.getPageTabs().find('li').should('have.length', tabCount);
})

And('I validate homepage tab names', () => {
    cy.fixture('example').then((testData) => {
        cy.get('#pages-nav').find('li div strong').each(($el, index) => {
            var textValue = $el.text();
            assert.equal(textValue, testData.homePageTabs[index]);
            })
    })
})

Given('I validate search option is visible', () => {
    homePage.getSearch().should('be.visible');
})

Given('I validate signin option is visible', () => {
    homePage.getSignInButton().should('be.visible');
})

Given('I validate homepage has {string} Online Banking Features', (onlineBankingFeatures) => {
    homePage.getOnlineBankingFeatures().find('h4').should('have.length', onlineBankingFeatures);
})

Then('I validate Online Banking Feature names', () => {
    cy.fixture('example').then((featureNames) => {
        homePage.getOnlineBankingFeatures().find('h4').each(($el, index, $list) => {
            var textValue = $el.text();
            assert.equal(textValue, featureNames.onlineBankingFeatures[index]);
        })
    })
})

And('I validate {string} button is visible', (textName) => {
    homePage.getMoreServices().should('have.text', textName);
})

And('I validate footer has {string} links', (footerLinks) => {
    homePage.getFooterSection().find('li').should('have.length', footerLinks);
})

Then('I validate footer links', () => {
    cy.fixture('example').then((footerLinks) => {
        homePage.getFooterSection().find('li').each(($el, index, $list) => {
            var textValue = $el.text();
            assert.equal(textValue, footerLinks.footerWebLinks[index]);
        })
    })
})

Given('I take a screenshot of homepage', () => {
    cy.percySnapshot();
})


//*************Data Table Usage*************\\
Given('I login as following', dataTable => {
    dataTable.hashes().forEach(row => {
        cy.get('#UserName').type(row.userName);
        cy.get('#Password').type(row.password, {log:falselse});
    });
    cy.get('.btn').click();
})