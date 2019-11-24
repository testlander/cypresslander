import BasePage from "./BasePage";

class HomePage extends BasePage
{
    //--------------------------------------ELEMENTS--------------------------------------\\

    getBannerText() {
        return cy.get('.c1-5e > .c1-16 > .c1-1f > .c1-1g > [data-ux="Hero"] > .x-el');
    }

    getAddress() {
        return cy.get('.c1-1f.x-d-aid > .c1-1g > .x-el-div > .x-el-p.x-d-aid');
    }

    getContactUs() {
        return cy.get('.c1-1f > .x-el-div > .x-el-h2 > .x-el');
    }

    getSendMessageButton() {
        return cy.get('.x-el-span > :nth-child(1) > .c2-3p');
    }

    getEmailField() {
        return cy.get('#input8');
    }

    getSignUpButton() {
        return cy.get('[data-route="subscribeButtonLabel"] > .x-el-div > .x-el');
    }

    getSignUpErrorMessage() {
        return cy.get('.c2-2i > [data-ux="Block"] > .x-el-p');
    }

    //--------------------------------------VALIDATIONS--------------------------------------\\

    validateHomePageUrl(expectedUrl) {
        return cy.url().should('include', expectedUrl);
    }

    validateBannerText(expectedText) {
        this.getBannerText().should('have.text', expectedText);
    }

    validateContactUs(expectedText) {
        this.getContactUs().should('have.text', expectedText);
    }

    validateAddressInfo(expectedAddress) {
        this.getAddress().should('have.text', expectedAddress);
    }

    validateSignUpText(expectedText) {
        this.getSignUpButton().should('have.text', expectedText);
    }

    validateSignUpErrorMessage(expectedErrorMessage) {
        this.getSignUpErrorMessage().should('have.text', expectedErrorMessage);
    }

    isBannerTextVisible() {
        this.getBannerText().should('be.visible');
    }

    isSendMessageButtonVisible(expectedText) {
        this.getSendMessageButton().should('have.text', expectedText);
        this.getSendMessageButton().should('be.visible');
    }

    isEmailFieldVisible() {
        this.getEmailField().should('be.visible');
    }

    isSignUpButtonVisible() {
        this.getSignUpButton().should('be.visible');
    }

    //--------------------------------------ACTIONS--------------------------------------\\
    clickSignUpButton() {
        this.getSignUpButton().click();
    }
}

export default HomePage;