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

export function headlessLogin(loginname, password) {
    let csrfToken;
    let csrfInstance;

    cy.request('GET', '/index.php?rt=account/login').then( response => {
        let htmlResp = document.createElement('html');
        htmlResp.innerHTML = response.body;
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            form: true,
            body: {
                csrftoken: csrfToken,
                csrfinstance: csrfInstance,
                loginname: loginname,
                password: password
            }
        }).then( response => {
            expect(response.status).eq(200);
        })
    })
}

export function findItem(productName) {
    cy.log('Find item');
    cy.get('body').then((body) => {
        if (body.find(`[title="${productName}"]`).length > 0) {
            cy.get(`[title="${productName}"]`).click();
            cy.get('.bgnone').should('have.text', productName);
        } else {
            cy.get('.pagination li a').contains('>').click();
            findItem(productName)
        }
    })
}