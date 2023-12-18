export class EditPage{

    editClientButton() {return cy.get('')};
    lastnameField() {return cy.get('')};
    firstnameField() {return cy.get('')};
    dateofbirth() {return cy.get('')};
    numberofphone() {return cy.get('')};
    email() {return cy.get('')};
    savebutton() {return cy.get('')};

    EditClientForm(lastName, firstName, dateOfBirth, number, email){
        this.lastnameField().type(lastName);
        this.firstnameField().type(firstName);
        this.dateofbirth().type(dateOfBirth);
        this.numberofphone().type(number);
        this.email().type(email);
        
    }
}

