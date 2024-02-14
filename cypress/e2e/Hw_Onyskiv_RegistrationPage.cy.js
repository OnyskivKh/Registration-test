describe('Registration page', () => {
    it('Fill in form', () => {
        cy.visit('/');

        cy.get('#customer_menu_top').click();
        cy.get('.btn-orange').first().click();
        cy.get('form#AccountFrm').within(() => {
            cy.get('input#AccountFrm_firstname').siblings('span').should('have.text', '*');//check for all required fields
            cy.get('#AccountFrm_firstname').click().focus().type('Krystyna');
            cy.get('#AccountFrm_lastname').type('Onyskiv');
            cy.get('#AccountFrm_email').type('krystyna0012@gmail.com');
            cy.get('[name="address_1"]').type('1 Maja');
            cy.get('#AccountFrm_city').type('Opole');
            cy.get('#AccountFrm_country_id').select('Poland').should('have.value', '170');
            cy.get('[name="zone_id"]').select('Opolskie').should('have.value', '2638');
            cy.get('#AccountFrm_postcode').type('45-045');
            cy.get('#AccountFrm_loginname').type('Krystyna0012');
            cy.get('#AccountFrm_password').type('qwerty12345');
            cy.get('#AccountFrm_confirm').type('qwerty12345');
            cy.get('#AccountFrm_newsletter0').check();
            cy.get('[type="checkbox"]').check();
            cy.get('button.btn').click();
        });

        it('Check URL', () => {
            cy.location().should(location => {
                expect(location.href).to.eq('https://automationteststore.com/index.php?rt=account/success');
            });
            cy.get('.maintext').should('have.prop', 'textContent', ' Your Account Has Been Created!');
        });
    });
});
