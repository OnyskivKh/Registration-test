export function fillAuthorizationField(username = '', password = '') {
    cy.log('Fill in authorization fields');
    username ? cy.get('#loginFrm_loginname').type(username) : cy.log('username fields not filled');
    password ? cy.get('#loginFrm_password').type(password) : cy.log('password fields not filled');
    cy.get('[title="Login"]').click();

}

// if(username){
//     cy.get('#loginFrm_loginname').type(username)
// }else{
//     cy.log('username fields not filled')
// }

