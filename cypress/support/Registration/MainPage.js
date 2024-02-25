class MainPage {

    constructor(){
        this.url = "https://automationteststore.com/"
    }

    visit(){
        cy.visit(this.url);
    }

    getRegisterPage(){
        return cy.get('#customer_menu_top');
    }

    getContinueButton(){
        return cy.get('.btn-orange');
    }
}

export default new MainPage()