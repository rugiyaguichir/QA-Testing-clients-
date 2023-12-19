export class EditPage{

    editClientButton() {return cy.get('.crm-navigator-table__row.ng-star-inserted')};
    lastnameField() {return cy.get('input[placeholder="Фамилия"]')};
    firstnameField() {return cy.get('input[placeholder="Имя"]')};
    dateofbirth() {return cy.get('input[placeholder="Дата рождения"]')};
    button1(){return cy.get('.col-item.tel label span.editIcon')};
    numberofphone() {return cy.get('input[placeholder="Телефон"]')};
    email() {return cy.get('input[placeholder="Почта"]')};
    saveinfo() {return cy.get('.mat-dialog-actions button.mat-raised-button:contains("Сохранить")')};
    savebutton() {return cy.get('.save-btn button[name="save"]')};

    EditClientForm(lastName, firstName, dateOfBirth, number, email){
        this.editClientButton().eq(0).click();
        this.lastnameField().clear().type(lastName);
        this.firstnameField().clear().type(firstName);
        this.dateofbirth().clear().type(dateOfBirth);
        this.button1().click();
        this.numberofphone().clear().type(number);
        this.email().clear().type(email);
        this.saveinfo().click();
        this.savebutton().click();
        cy.visit('http://167.114.201.175:5000/clients');
        cy.pause();
    }
}

