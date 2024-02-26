import user from '../fixtures/User.json'
import {fillAuthorizationField} from "../support/helper";
import LoginPage from "../support/Pages/LoginPage";
import accountPage from "../support/Pages/AccountPage";
import loginPage from "../support/Pages/LoginPage";
describe('Authorization positive scenarios', () => {

    it('Authorization ', () => {
        cy.log('Open authorization form');
        LoginPage.visit();
        LoginPage. fillLoginFields(user.loginname, user.password)

        cy.log('User first name should displayed on the page');
        accountPage.getFirstNameText('contain', user.firstname);
    });
})

//TODO

describe('Authorization negative scenarios', () => {

    it('Authorization without entering username', () => {
        cy.log('Open authorization form');
        LoginPage.visit();
        LoginPage. fillLoginFields(user.loginname, user.password)

        cy.log('Error have appear ');
       loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');
    });

    it('Authorization without entering password', () => {

        LoginPage.visit();
        LoginPage. fillLoginFields(user.loginname)

        cy.log('Error have appear');
        loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');

    });
    it('Authorization with empty values ', () => {

        LoginPage.visit();
        LoginPage. fillLoginFields()

        cy.log('Error have appear');
        loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');
    });

})

// let userCred = [
//     {login: '', pass: 'assa'},
//     {login: 'asas', pass: ''}
// ]
//
// userCred.forEach(user => {
//
//     cy.log('Test for each');
//     cy.visit('/index.php?rt=account/login');
//
//     fillAuthorizationField(user.login, user.pass)
//
//     cy.log('User first name should displayed on the page');
//     cy.get('.alert-danger').should('contain', 'Error: Incorrect login or password provided.');
//
// })
