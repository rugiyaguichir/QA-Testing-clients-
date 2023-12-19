import { LoginPage } from "../pageObjects/LoginPage";
import { EditPage } from "../pageObjects/EditPage";

describe('Login Suite:', () => {
  const loginPage = new LoginPage();
  const editPage = new EditPage();

  it('should edit successfully', () => {
    loginPage.doLogin();
    cy.url().should('include', 'clients');

    editPage.EditClientForm('Guichir1', 'Rugiya2', '10.10.2000', '996555000000', 'examlee@gmail.com');

    cy.url().should('include', 'clients');
    cy.pause();

  })

})