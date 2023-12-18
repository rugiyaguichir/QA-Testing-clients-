import { LoginPage } from "../pageObjects/LoginPage";

describe('Login Suite:', () => {
  const loginPage = new LoginPage();

  it('should do login successfully', () => {
    loginPage.doLogin();
    cy.url().should('include', 'clients');
    cy.get('.crm-page').click();
    cy.get('.crm-navigator-table__row').click();
    cy.get('tbody tr:first').click();


    // cy.get('.crm-navigator-table__row.ng-star-inserted').click();
    // cy.contains('.crm-navigator-table__date', 'Spencer Peter').click();
    cy.wait(10000);

    cy.get('button.mat-button:contains("Экспортировать CSV")').click();
    // Check the checkbox
    cy.get('.mat-checkbox-inner-container').check();

    // Uncheck the checkbox
    cy.get('.mat-checkbox-inner-container').uncheck();

    cy.get('button.mat-raised-button[aria-label="Close dialog"]').click();




  })

})