export default class BasePage {

    constructor() {
        this.dropdown = '.dropdown'
        this.button = '.button'
    }

    getSearchInput(){
        return cy.get('#filter_keyword');
    }
}