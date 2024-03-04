import user from '../fixtures/User.json'
import {fillAuthorizationField} from '../support/helper.js'
import accountPage from "../support/Pages/AccountPage";
import loginPage from "../support/Pages/LoginPage";

describe('Order suit', () => {
    it('Order from page  ', () => {
        cy.log('Open authorization form');
        loginPage.visit();

        fillAuthorizationField(user.loginname, user.password)

        cy.log('User first name should displayed on the page');
        accountPage.getFirstNameText().should('contain', user.firstname);
    });
})




