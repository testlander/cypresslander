/// <reference types="Cypress" />

import Validations from '../../support/pages/Validations'
import HomePage from '../../support/pages/HomePage'

describe('Zero Bank Home Page Test Suite', function()
{

    const validations = new Validations();
    const homePage = new HomePage();

    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        })
    })

    it('Menu Options Test Case', function()
    {
        cy.visit(Cypress.env('mainUrl'));
        validations.validatePageTitle('Zero - Personal Banking - Loans - Credit Cards');

        homePage.getPageTabs().find('li').should('have.length', 3);

        var expectedResult = this.data.homePageTabs;

        homePage.getPageTabs().find('li div strong').each(($el, index, $list) => {
        var textValue = $el.text();
        assert.equal(textValue, expectedResult[index]);
        })
    })

    it('Search Option Test Case', function()
    {
        homePage.getSearch().should('be.visible');
    })

    it('Sign In Option Test Case', function()
    {
        homePage.getSignInButton().should('be.visible');
        
        // cy.log(homePage.getSignInButton().then(($el) =>
        // {
        //     const textVal = $el.get(0).innerText;
        //     expect(textVal).to.include('Sirergnin');
        //     //With a valid valid test is not stopping
        // })
        // );
    })

    it('Online Banking Features on HomePage Test Case', function()
    {
        homePage.getOnlineBankingFeatures().find('h4').should('have.length', 4);

        var expectedResult = this.data.onlineBankingFeatures;

        homePage.getOnlineBankingFeatures().find('h4').each(($el, index, $list) => {
            var textValue = $el.text();
            cy.log(textValue);
            assert.equal(textValue, expectedResult[index]);
        })

        homePage.getMoreServices().should('have.text', 'More Services');
    })

    it('Footer links on Homepage Test Case',function()
    {
        homePage.getFooterSection().should('have.length', 3);

        var expectedResult = this.data.footerWebLinks;

        homePage.getFooterSection().find('li').should('have.length', 4);

        homePage.getFooterSection().find('li').each(($el, index, $list) => {
            var textValue = $el.text();
            cy.log(textValue);
            assert.equal(textValue, expectedResult[index]);
        })
    })
})