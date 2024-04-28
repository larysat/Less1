const Base = require("./base");

class NewsLetterPopup extends Base {
  get closeDialogButton() {
    return cy.get(".newsletter-modal-close.newsletter-modal-close--bottom");
  }
  closeNewsLetterPopup() {
    this.closeDialogButton.click();
  }
}

module.exports = new NewsLetterPopup();
