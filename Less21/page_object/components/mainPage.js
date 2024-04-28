const Base = require("./base");

class MainPage extends Base {
  async accountButton() {
    return cy.get(".justify-content-end>.my-account");
  }

  get singInButton() {
    return cy.get(".justify-content-end .flyout__js-open.position-relative");
  }
  get subscribeButton() {
    return cy.get(".sign-up-container .btn-red.sign-up-button");
  }
  get loupButton() {
    return cy.get("#navbar .navbar-content>a:nth-child(3)");
  }
  get searchInput() {
    return cy.get(".site-search__input");
  }
  get searchButton() {
    return cy.get(".site-search__button.ms-3.text-uppercase");
  }

  get accountButton() {
    return cy.get(".justify-content-end>.my-account");
  }
  get responsiveNavBarButton() {
    return cy.get(".overlay-menu-toggle.overlay-menu-toggle--navbar");
  }

  foundBySearchCriteria(text) {
    this.loupButton.click();
    this.searchInput.type(text);
    this.searchButton.click();
  }
}

module.exports = new MainPage();
