const Base = require("./base");

class ContactUsPage extends Base {
  get contactUsPageTitle() {
    return cy.get(".col-12.col-md-9 .col-lg-11>.d-none");
  }
}

module.exports = new ContactUsPage();
