import BasePage from "./BasePage";

class AccountPage extends BasePage{

    visit(){
        cy.visit('/index.php?rt=account/account');
    }
    getFirstNameText(){
        return cy.get('.heading1 .subtext');

    }

}
export default new AccountPage()