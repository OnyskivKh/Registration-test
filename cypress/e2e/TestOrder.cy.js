import {findItem} from "../support/helper.js"

describe('Search for item', () => {
    it('search for "E" value in search bar ', () => {
        cy.visit('/')
        cy.get('#filter_keyword').type('e');
        cy.get('.button-in-search').parents('form').submit();
        findItem('Benefit Bella Bamba');

    })
})



