import BasePage from "./BasePage";

class LoginPageWithConstructor extends BasePage { // example class with login page and constructor

    constructor() {
        super();
        this.loginField = '#loginFrm_loginname';
        this.passwordField = '#loginFrm_password';
        this.submitButton = '[title="Login"]';
        this.errorMessageText = '.heading1 .subtext';
    }

    visit() {
        cy.log('Open authorization form');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginNameField() {
        return cy.get(this.loginField);
    }

    getPasswordField() {
        return cy.get(this.passwordField);
    }

    getSubmitButton() {
        return cy.get(this.submitButton);
    }

    getErrorMessageText() {
        return cy.get(this.errorMessageText);
    }

    getErrorMessageDropdown() {
        return cy.get(`${this.errorMessageText} ${this.dropdown}`); // .heading1 .subtext .dropdown
    }

    getErrorMessageButton() {
        return cy.get(`${this.errorMessageText} ${this.button}`); // .heading1 .subtext .button
    }

    fillLoginFields(username = '', password = '') {
        cy.log('Fill in authorization fields');
        username ? this.getLoginNameField().type(username) : cy.log('Skip username field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getSubmitButton().click();
    }
}

export default new LoginPageWithConstructor()