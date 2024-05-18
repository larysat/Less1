const Base = require("./base");

class MainPage extends Base {
  get addToCartButtonOnMainPage() {
    return $(".button-2.product-box-add-to-cart-button");
  }
  get displayingPopupMessage() {
    return $(".content");
  }

  get fistFoundProduct() {
    return $(".product-title");
  }

  async addingToCartSearchResult() {
    await this.addToCartButtonOnMainPage.waitForDisplayed();
    await this.addToCartButtonOnMainPage.click();
    await this.displayingPopupMessage.waitForDisplayed();
  }
  async openFoundProduct() {
    await this.fistFoundProduct.waitForDisplayed();
    await this.fistFoundProduct.click();
  }
}

module.exports = new MainPage();
