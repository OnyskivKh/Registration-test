import user from '../fixtures/User.json'
import {faker} from '@faker-js/faker'
import mainPage from "../support/Registration/MainPage";
import registrationPage from "../support/Registration/RegistrationPage";
import loginPage from "../support/Pages/LoginPage";
import accountPage from "../support/Pages/AccountPage";


//let test =faker.word.verb();
user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email();// use always this 'some.fakeMail.qa'
user.loginname = faker.internet.userName();

describe('register with valid data', () => {
    it('Registration', () => {
       // cy.log(test);
        cy.log('Open registration form');
        mainPage.visit();
        mainPage.getRegisterPage().click();
        mainPage.getContinueButton().first().click();

        cy.log('Fill in the fields Personal Details fields');
        registrationPage.getFirstNameField().type(user.firstname).should('have.value', user.firstname);
        registrationPage.getLastNameField().type(user.lastname).should('have.value', user.lastname);
        registrationPage.getEmailField().type(user.email).should('have.value', user.email);
        registrationPage.getTelephoneField().type(user.telephone).should('have.prop', 'value', user.telephone);
        registrationPage.getFaxField().type(user.fax).should('have.prop', 'value', user.fax);

        cy.log('Fill in the Your Address fields');
        registrationPage.getCompanyield().type(user.company).should('have.prop', 'value', user.company);
        registrationPage.getAddress1Field().type(user.address_1).should('have.prop', 'value', user.address_1);
        registrationPage.getAddress2Field().type(user.address_2).should('have.prop', 'value', user.address_2);
        registrationPage.getCityField().type(user.city).should('have.prop', 'value', user.city);
        registrationPage.getZipCode().type(user.postcode).should('have.prop', 'value', user.postcode);
        registrationPage.getCountryDropdown().select(user.country).should('have.prop', 'value', user.country_id);
        registrationPage.getStateDropdown().select(user.zone_name).should('have.prop', 'value', user.zone_id);

        cy.log('Fill in the Login Details fields');
        registrationPage.getLoginName().type(user.loginname).should('have.prop', 'value', user.loginname);
        registrationPage.getPasswordField().type(user.password).should('have.prop', 'value', user.password);
        registrationPage.getConfirmField().type(user.password).should('have.prop', 'value', user.password);

        cy.log('Fill in the Newsletter');
        registrationPage.getNewsletterRadioButton().click().should('be.checked');
        registrationPage.getCheckbox().check().should('be.checked');

        cy.log('Submit form and check results');
        registrationPage.getContinueButton().click();
        registrationPage.getConfirmText().invoke('text').should('contain', 'Your Account Has Been Created!');
    })

    it('Authorization', () => {
        cy.log('Open authorization form');
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        cy.log('User first name should be displayed on the page');
        accountPage.getFirstNameText('contain', user.firstname);
    });

})

