const Base = require("./base");

class CardPage extends Base {
  get productName() {
    return $(".product-name");
  }

  get toCardButton() {
    return $(".add-to-cart-panel #add-to-cart-button-28");
  }

  get toWishListButton() {
    return $(".button-2.add-to-wishlist-button");
  }

  get wishlistCount() {
    return $(".header-links .ico-wishlist>.wishlist-qty");
  }

  get lengthTextBox() {
    return $(".textbox");
  }

  get popupErrorMessage() {
    return $(".bar-notification.error");
  }

  get toCompareButton() {
    return $(".button-2.add-to-compare-list-button");
  }
  async addToCardWithAttributes() {
    await this.productName.waitForDisplayed();
    await this.toCardButton.waitForDisplayed();
    await this.toCardButton.click();
  }

  async addToWishList() {
    await this.toWishListButton.waitForDisplayed();
    await this.toWishListButton.click();
    await this.wishlistCount.waitForDisplayed();
  }

  async setLength(length) {
    await this.lengthTextBox.waitForDisplayed();
    await this.lengthTextBox.setValue(length);
  }

  async addToCompareList() {
    await this.toCompareButton.waitForDisplayed();
    await this.toCompareButton.click();
  }
}

module.exports = new CardPage();
