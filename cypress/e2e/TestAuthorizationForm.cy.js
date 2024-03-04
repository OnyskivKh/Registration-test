import user from '../fixtures/User.json'
import accountPage from "../support/Pages/AccountPage";
import loginPage from "../support/Pages/LoginPage";
import {login} from "../support/helperLogin";

describe('Authorization positive scenarios', () => {

    it('Authorization ', () => {
        cy.log('Open authorization form');
        loginPage.visit();
        loginPage. fillLoginFields(user.loginname, user.password)

        cy.log('User first name should displayed on the page');
        accountPage.getFirstNameText('contain', user.firstname);
    });
})

//TODO

describe('Authorization negative scenarios', () => {

    it('Authorization without entering username', () => {
        cy.log('Open authorization form');
        loginPage.visit();
        loginPage. fillLoginFields(user.loginname, user.password)

        cy.log('Error have appear ');
       loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');
    });

    it('Authorization without entering password', () => {

        loginPage.visit();
        loginPage. fillLoginFields(user.loginname)

        cy.log('Error have appear');
        loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');

    });
    it('Authorization with empty values ', () => {

        loginPage.visit();
        loginPage. fillLoginFields()

        cy.log('Error have appear');
        loginPage.getErrorMessageText('contain', 'Error: Incorrect login or password provided.');
    });
    it('Authorization via API ', () => {
        loginPage.visit();
        login(user.loginname, user.password)

        cy.log('User first name should displayed on the page');
        accountPage.getFirstNameText('contain', user.firstname);
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
