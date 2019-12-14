/// <reference types="Cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

Given('I visit Zero Bank web site', () =>{
    cy.visit(Cypress.env('mainUrl'));
})

Then('I validate homepage title as {string}', (pageTitle) => {
    cy.title().should('eq', pageTitle);
})

And('I validate homepage has {string} tabs', (tabCount) => {
    cy.get('#pages-nav').find('li').should('have.length', tabCount);
})

And('I validate homepage tab names', () => {
    var expectedResult = ["Home", "Online Banking", "Feedback"];

    cy.get('#pages-nav').find('li div strong').each(($el, index, $list) => {
    var textValue = $el.text();
    assert.equal(textValue, expectedResult[index]);
    })
})