const Base = require("../base");

class HeaderToolbar extends Base {
  get loginField() {
    return $(".ico-login");
  }
  get searchField() {
    return $(".search-box-text.ui-autocomplete-input");
  }
  get searchButton() {
    return $(".button-1.search-box-button");
  }

  get logOutButton() {
    return $(".ico-logout");
  }

  get accountButton() {
    return $(".header-links-wrapper .account");
  }

  get shoppingCart() {
    return $(".ico-cart>.cart-label");
  }

  get shoppingCartCount() {
    return $(".ico-cart>.cart-qty");
  }

  get topCartLink() {
    return $(".header-links #topcartlink");
  }

  get goToCart() {
    return $(".button-1.cart-button");
  }

  get checkoutButton() {
    return $(".checkout-buttons");
  }
  get wishlistButton() {
    return $(".header-links .ico-wishlist");
  }
  get registerButton() {
    return $(".ico-register");
  }

  async gotoLoginPage() {
    await this.loginField.waitForDisplayed();
    await this.loginField.click();
  }

  async gotoWishlistPage() {
    await this.wishlistButton.waitForDisplayed();
    await this.wishlistButton.click();
  }

  async logOut() {
    await this.logOutButton.waitForDisplayed();
    await this.logOutButton.click();
  }

  async gotoCartPage() {
    await this.shoppingCart.waitForDisplayed();
    await this.shoppingCart.click();
    await this.checkoutButton.waitForDisplayed();
  }

  async searchProduct(text) {
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(text);
    await this.searchButton.click();
  }

  async dispayingMiniShoppingCard() {
    await this.shoppingCart.waitForDisplayed();
    await this.shoppingCart.moveTo();
  }
  async gotoRegisterPage() {
    await this.registerButton.waitForDisplayed();
    await this.registerButton.click();
  }
}

module.exports = new HeaderToolbar();
