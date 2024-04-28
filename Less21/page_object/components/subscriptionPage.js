const Base = require("./base");

class SubscriptionPage extends Base {
  get setEmailField() {
    return cy.get(".search-form-input.me-auto.ms-auto");
  }
  get alertDanger() {
    return cy.get(".alert-dismissible.alert-danger");
  }

  setEmail(text) {
    this.setEmailField.click();
    this.setEmailField.type(text);
  }
}

module.exports = new SubscriptionPage();
