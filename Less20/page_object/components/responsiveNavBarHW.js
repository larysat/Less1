const BaseHW = require("../baseHW");

class ResponsiveNavBarHW extends BaseHW {
  constructor(page) {
    super(page);
  }

  get responsiveNavBarButton() {
    return ".overlay-menu-toggle.overlay-menu-toggle--navbar";
  }

  get responsiveNavAccordionContactLink() {
    return "#collapse--contact8";
  }
  get navAccordionMenu6() {
    return "#headingMenu6";
  }

  async contactUsPageTitle() {
    return this.page.locator(".static-page--upper .field--name-title");
  }
  async respTest() {
    return this.page.locator(".row.mb-md-4>div:last-child .list-unstyled");
  }

  async gotoContactPoinOfAccordion() {
    await this.page.waitForSelector(this.responsiveNavBarButton);
    await this.page.click(this.responsiveNavBarButton);
    await this.page.waitForSelector(this.responsiveNavAccordionContactLink);
    await this.page.click(this.responsiveNavAccordionContactLink);
  }
}

module.exports = ResponsiveNavBarHW;
