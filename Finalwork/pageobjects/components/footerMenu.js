const Base = require("../base");

class FooterMenu extends Base {
  get wishlistLink() {
    return $(".column.my-account .ico-wishlist");
  }

  get compareProductsLink() {
    return $(".column.customer-service>:nth-child(2)>:nth-child(5)");
  }
  get shoppingCart() {
    return $(".column.my-account .ico-cart");
  }

  async gotoWishlist() {
    await this.wishlistLink.waitForDisplayed();
    await this.wishlistLink.click();
  }

  async gotoCompareProducts() {
    await this.compareProductsLink.waitForDisplayed();
    await this.compareProductsLink.click();
  }

  async gotoShoppingCart() {
    await this.shoppingCart.waitForDisplayed();
    await this.shoppingCart.click();
  }
}

module.exports = new FooterMenu();
