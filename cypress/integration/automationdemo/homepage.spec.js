/// <reference types="Cypress" />

import HomePage from '../../support/pages/HomePage';
import Validations from '../../support/pages/Validations';

describe('The Home Page Test Suite', function()
{
    const homePage = new HomePage;
    const validations = new Validations;

    beforeEach(function () {
        cy.log('Test case is in progress..');
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        })
      })

    it('Site navigation validation', function()
    {
        cy.visit(Cypress.env('url'));
        homePage.validateHomePageUrl(this.data.homePageUrl);

        homePage.waitUntil(1000);

        validations.validatePageTitle(this.data.homePageTitle);
        homePage.validateBannerText(this.data.homePageBannerText);
        homePage.isBannerTextVisible();
    })

    it('Subscribe Section Validation', function()
    {
        homePage.isEmailFieldVisible();
        homePage.validateSignUpText('Sıgn up');
        homePage.waitUntil(1000);
        homePage.isSignUpButtonVisible();
    })

    it('Valid email address check', function()
    {
        homePage.clickSignUpButton();
        homePage.waitUntil(1000);
        homePage.validateSignUpErrorMessage('Please enter a valid email address.');
    })

    it('Contact Us Section Validation', function()
    {
        homePage.validateContactUs('Contact Us');
        homePage.validateAddressInfo(this.data.addressInfo);
        homePage.waitUntil(1000);
        homePage.isSendMessageButtonVisible('Send Message');
        cy.scrollTo('top');
    })
})