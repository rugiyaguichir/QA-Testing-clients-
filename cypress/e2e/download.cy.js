import { LoginPage } from "../pageObjects/LoginPage";
import { DownloadPage } from "../pageObjects/Download";

describe('Login Suite:', () => {
  const loginPage = new LoginPage();
  const downloadPage = new DownloadPage();

  it('should download successfully', () => {
    loginPage.doLogin();
    cy.url().should('include', 'clients');

    downloadPage.DownloadForm();
    cy.url().should('include', 'clients');
  })

})