const Base = require("../baseHW");

class FrameHW extends BaseHW {
  constructor(page) {
    super(page);
  }
  get noThanksLink() {
    return ".newsletter-backdrop>.newsletter-modal";
  }

  async getNewsletterWindow() {
    const iframeElement = await this.page
      .locator(".newsletter-backdrop>.newsletter-modal")
      .elementHandle();
    const frame = await iframeElement.contentFrame();
    await frame.waitForURL(new RegExp(".*cdn.privacy-mgmt.com*", "i"));
    const acceptButton = await frame.locator(this.noThanksLink);
    await acceptButton.click();
  }
}

module.exports = FrameHW;
