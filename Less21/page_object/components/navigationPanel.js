const Base = require("./base");

class NavigationPanel extends Base {
  get responsiveNavBarButton() {
    return cy.get(".overlay-menu-toggle.overlay-menu-toggle--navbar");
  }
  get responsiveNavAccordionContactLink() {
    return cy.get("#collapse--contact8");
  }
  get responsiveNavAccordionArchiveLink() {
    return cy.get("#collapse--archive1");
  }
}

module.exports = new NavigationPanel();
