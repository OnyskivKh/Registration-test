import user from '../fixtures/User.json';
import {faker} from "@faker-js/faker";
import mainPage from "../support/Registration/MainPage";
import registrationPage from "../support/Registration/RegistrationPage";
import loginPage from "../support/Pages/LoginPage";
import accountPage from "../support/Pages/AccountPage";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Khrystyna', lastName: 'Onyskiv', provider: 'some.fakeMail.qa', allowSpecialCharacters: false }); // use always this 'some.fakeMail.qa'
user.loginname = faker.internet.userName();

describe('Registration page', () => {
    it('Fill in form and verify registration success', () => {
            cy.log('Open registration form');
            mainPage.visit();
            mainPage.getRegisterPage().click();
            mainPage.getContinueButton().first().click();

            cy.log('Fill in the required Personal info fields');
            registrationPage.getRegistrationForm().within(() => {
            registrationPage.getFirstNameField().type(user.firstname).should('have.value', user.firstname);
            registrationPage.getLastNameField().type(user.lastname).should('have.value', user.lastname);
            registrationPage.getEmailField().type(user.email).should('have.value', user.email);

            cy.log('Fill in the required Address fields');
            registrationPage.getAddress1Field().type(user.address_1).should('have.value', user.address_1);
            registrationPage.getCityField().type(user.city).should('have.value', user.city);
            registrationPage.getCountryDropdown().select(user.country).should('have.value', user.country_id);
            registrationPage.getStateDropdown().select(user.zone_name).should('have.value', user.zone_id);
            registrationPage.getZipCode().type(user.postcode).should('have.value', user.postcode);

            cy.log('Fill in the Login Details fields');
            registrationPage.getLoginName().type(user.loginname).should('have.prop', 'value', user.loginname);;
            registrationPage.getPasswordField().type(user.password).should('have.prop', 'value', user.password);
            registrationPage.getConfirmField().type(user.password).should('have.prop', 'value', user.password);

            cy.log('Fill in the Newsletter');
            registrationPage.getNewsletterRadioButton().check();
            registrationPage.getCheckbox().check();
            registrationPage.getContinueButton().click();
        });

        it('Authorization', () => {
            cy.log('Open authorization form');
            loginPage.visit();
            loginPage.fillLoginFields(user.loginname, user.password);

            cy.log('User first name should be displayed on the page');
            accountPage.getFirstNameText('contain', user.firstname);
        });
    });
});



