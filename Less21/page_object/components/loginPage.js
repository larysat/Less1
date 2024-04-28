const Base = require("./base");

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get emailLoginField() {
    return cy.get(".flyout__field.d-flex>#email");
  }
  get passwordLoginField() {
    return cy.get(".flyout__field.d-flex>#password");
  }

  loginByEmailAndPassword(email, password) {
    this.emailLoginField.type(email);
    this.passwordLoginField.click();
    this.passwordLoginField.type(password);
    this.passwordLoginField.type("Cypress.io{enter}");
  }
}

module.exports = new LoginPage();
