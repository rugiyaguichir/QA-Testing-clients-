export class DownloadPage{
    editClientButton() {return cy.get('.crm-navigator-table__row.ng-star-inserted')};
    downloadbutton() {return cy.get('button.mat-button:contains("Экспортировать CSV")')};
    checkbutton() {return cy.get('[id="mat-checkbox-62-input"]')};
    savebutton() {return cy.get('button.mat-raised-button.mat-primary[aria-label="Close dialog"]')};

    DownloadForm(){
        this.editClientButton().eq(0).click();
        this.downloadbutton().click();
        this.checkbutton().check({ force: true });
        this.savebutton().click();
        cy.visit('http://167.114.201.175:5000/clients');
        cy.pause();
    }
}