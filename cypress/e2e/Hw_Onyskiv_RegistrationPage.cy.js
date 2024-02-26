import user from '../fixtures/User.json';
import {faker} from "@faker-js/faker";
import MainPage from "../support/Registration/MainPage";
import RegistrationPage from "../support/Registration/RegistrationPage";
import LoginPage from "../support/Pages/LoginPage";
import AccountPage from "../support/Pages/AccountPage";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Khrystyna', lastName: 'Onyskiv', provider: 'some.fakeMail.qa', allowSpecialCharacters: false }); // use always this 'some.fakeMail.qa'
user.loginname = faker.internet.userName();

describe('Registration page', () => {
    it('Fill in form and verify registration success', () => {
            cy.log('Open registration form');
            MainPage.visit();
            MainPage.getRegisterPage().click();
            MainPage.getContinueButton().first().click();

            cy.log('Fill in the required Personal info fields');
            RegistrationPage.getRegistrationForm().within(() => {
            RegistrationPage.getFirstNameField().type(user.firstname).should('have.value', user.firstname);
            RegistrationPage.getLastNameField().type(user.lastname).should('have.value', user.lastname);
            RegistrationPage.getEmailField().type(user.email).should('have.value', user.email);

            cy.log('Fill in the required Address fields');
            RegistrationPage.getAddress1Field().type(user.address_1).should('have.value', user.address_1);
            RegistrationPage.getCityField().type(user.city).should('have.value', user.city);
            RegistrationPage.getCountryDropdown().select(user.country).should('have.value', user.country_id);
            RegistrationPage.getStateDropdown().select(user.zone_name).should('have.value', user.zone_id);
            RegistrationPage.getZipCode().type(user.postcode).should('have.value', user.postcode);

            cy.log('Fill in the Login Details fields');
            RegistrationPage.getLoginName().type(user.loginname).should('have.prop', 'value', user.loginname);;
            RegistrationPage.getPasswordField().type(user.password).should('have.prop', 'value', user.password);
            RegistrationPage.getConfirmField().type(user.password).should('have.prop', 'value', user.password);

            cy.log('Fill in the Newsletter');
            RegistrationPage.getNewsletterRadioButton().check();
            RegistrationPage.getCheckbox().check();
            RegistrationPage.getContinueButton().click();
        });

        it('Authorization', () => {
            cy.log('Open authorization form');
            LoginPage.visit();
            LoginPage.fillAuthorizationField(user.loginname, user.password);

            cy.log('User first name should be displayed on the page');
            AccountPage.getFirstNameText('contain', user.firstname);
        });
    });
});



