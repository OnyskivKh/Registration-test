
export function login(username, password) {
    cy.request({
        method: 'POST',
        url: '/index.php?rt=account/login',
        form: true,
        body: {
            email: username,
            password: password,
            submit_login: 'submit'
        }
    }).then(response => {
        expect(response.status).to.equal(200);

        cy.request({
            method: 'POST',
            url: '/index.php?rt=r/product/product/addToCart',
            form: true,
            body: {
                product_id: '123',
                quantity: '1'
            }
        }).then(addToCartResponse => {
            expect(addToCartResponse.status).to.equal(200);
        });
    });
}

