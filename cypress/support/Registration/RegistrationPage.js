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
    getTelephoneField() {
        return cy.get('#AccountFrm_telephone');
    }
    getFaxField() {
        return cy.get('#AccountFrm_fax');
    }
    getCompanyield() {
        return cy.get('#AccountFrm_company');
    }
    getAddress1Field() {
        return cy.get('#AccountFrm_address_1');
    }
    getAddress2Field() {
        return cy.get('#AccountFrm_address_2');
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
        return cy.get('[title="Continue"]');
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
    getConfirmText() {
        return cy.get('span.maintext');
    }
}
export default new RegistrationPage()