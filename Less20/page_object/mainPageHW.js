const BaseHW = require("./baseHW");

class MainPageHW extends BaseHW {
  constructor(page) {
    super(page);
  }
  get noThanksButton() {
    return ".newsletter-modal-close.newsletter-modal-close--bottom";
  }
  get newsLetterModalContent() {
    return ".newsletter-modal-content";
  }

  async accountButton() {
    return this.page.locator(".justify-content-end>.my-account");
  }

  async acceptNewsLetterPopup() {
    try {
      await this.page.waitForTimeout(2000);
      await this.page.waitForSelector(newsLetterModalContent);
      await this.page.click(this.noThanksButton);
      console.log("News Letter subscribe popup was displayed");
    } catch (error) {
      console.error("News Letter subscribe popup was not closed");
    }
  }
}

module.exports = MainPageHW;
