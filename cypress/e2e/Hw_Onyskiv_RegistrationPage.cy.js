describe('Registration page', () => {
    it('Fill in form and verify registration success', () => {
        cy.visit('/');


            cy.get('#customer_menu_top').click();
            cy.get('.btn-orange').first().click();
            cy.get('form#AccountFrm').within(() => {
            cy.get('input#AccountFrm_firstname').type('Krystyna');
            cy.get('#AccountFrm_lastname').type('Onyskiv');
            cy.get('#AccountFrm_email').type('krystyna055090@gmail.com');
            cy.get('[name="address_1"]').type('1 Maja');
            cy.get('#AccountFrm_city').type('Opole');
            cy.get('#AccountFrm_country_id').select('Poland');
            cy.get('[name="zone_id"]').select('Opolskie');
            cy.get('#AccountFrm_postcode').type('45-045');
            cy.get('#AccountFrm_loginname').type('Krystyna0855000');
            cy.get('#AccountFrm_password').type('qwerty12345');
            cy.get('#AccountFrm_confirm').type('qwerty12345');
            cy.get('#AccountFrm_newsletter0').check();
            cy.get('[type="checkbox"]').check();
            cy.get('button.btn').click();
        });
        cy.location().should(location => {
            expect(location.href).to.eq('https://automationteststore.com/index.php?rt=account/success');
        });
        cy.get('span.maintext').invoke('text').then(text => {
            expect(text.trim()).to.equal('Your Account Has Been Created!');
        });
    });
});

