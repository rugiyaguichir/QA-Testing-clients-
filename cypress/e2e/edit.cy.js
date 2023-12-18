import { LoginPage } from "../pageObjects/LoginPage";
import { EditPage } from "../pageObjects/EditPage";

describe('Login Suite:', () => {
  const loginPage = new LoginPage();
  const editPage = new EditPage();

  it('should do login successfully', () => {
    loginPage.doLogin();
    cy.url().should('include', 'clients');
    cy.get('.crm-page').click();
    cy.get('.crm-navigator-table__row').click();
    cy.get('tbody tr:first').click();


    // cy.get('.crm-navigator-table__row.ng-star-inserted').click();
    // cy.contains('.crm-navigator-table__date', 'Spencer Peter').click();

    cy.get('input[placeholder="Фамилия"]').type('Guichir');
    cy.get('input[placeholder="Имя"]').type('Rugiya1');
    cy.get('input[placeholder="Дата рождения"]').clear().type('10.10.2000');
    cy.get('input[placeholder="+996 (772) 55-55-55"]').should('have.attr', 'disabled');
    cy.get('input[placeholder="example@mail.ru"]').invoke('val', 'new text');
    cy.get('button[name="save"]').click({ force: true });

    cy.pause();

  })

})