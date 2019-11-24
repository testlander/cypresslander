import BasePage from "./BasePage";

class Validations extends BasePage
{
    validatePageTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }

    isPageTitleVisible() {
        cy.title().should('be.visible');
    }
}

export default Validations