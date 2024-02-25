import user from '../fixtures/User.json'
import {fillAuthorizationField} from '../support/helper.js'
import AccountPage from "../support/Pages/AccountPage";
import LoginPage from "../support/Pages/LoginPage";
describe('Order suit', () => {
    it('Order from page  ', () => {
        cy.log('Open authorization form');
        LoginPage.visit();

        fillAuthorizationField(user.loginname, user.password)

        cy.log('User first name should displayed on the page');
        AccountPage.getFirstNameText().should('contain', user.firstname);
    });
})




