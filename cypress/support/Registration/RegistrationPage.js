import LoginPage from "../Pages/LoginPage";
import {fillAuthorizationField} from "../helper";
import user from "../../fixtures/User.json";

class RegistrationPage {

    getRegistrationForm() {
        return cy.get('form#AccountFrm');
    }
    getFirstNameField() {
        return cy.get('#AccountFrm_firstname');
    }
    getLastNameField() {
        return cy.get('#AccountFrm_lastname');
    }
    getEmailField() {
        return cy.get('#AccountFrm_email');
    }
    getAddress1Field() {
        return cy.get('#AccountFrm_address_1');
    }
    getCityField() {
        return cy.get('#AccountFrm_city');
    }
    getStateDropdown() {
        return cy.get('#AccountFrm_zone_id');
    }
    getCountryDropdown() {
        return cy.get('#AccountFrm_country_id');
    }
    getZipCode() {
        return cy.get('#AccountFrm_postcode');
    }
    getNewsletterRadioButton() {
        return cy.get('#AccountFrm_newsletter0');
    }
    getCheckbox() {
        return cy.get('[type="checkbox"]');
    }
    getContinueButton() {
        return cy.get('button.btn');
    }
    getLoginName() {
        return cy.get('#AccountFrm_loginname');
    }
    getPasswordField() {
        return cy.get('#AccountFrm_password');
    }
    getConfirmField() {
        return cy.get('#AccountFrm_confirm');
    }
}
export default new RegistrationPage()