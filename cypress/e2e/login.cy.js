import { LoginPage } from "../pageObjects/LoginPage";

describe('Login Suite:', () => {
  const loginPage = new LoginPage();
  it('should do login successfully', () => {
    loginPage.doLogin();
    cy.url().should('include', 'clients');
  })

  it('should check validations: invalid Login', ()=> {
    loginPage.doLogin('InvalidLogin', 'Admin@Navi');
    cy.url().should('include', 'login');
  })

  it('should check validations: invalid Password', ()=> {
    loginPage.doLogin('Admin', 'InvalidPassword');
    cy.url().should('include', 'login');
  })
})