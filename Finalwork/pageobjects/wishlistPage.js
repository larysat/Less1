const Base = require("./base");

class WishlistPage extends Base {
  get removeCheckbox() {
    return $$(".cart-item-row .remove-from-cart");
  }
  get addToCartCheckbox() {
    return $(".add-to-cart :last-child");
  }

  get addToCartButoon() {
    return $(".button-2.wishlist-add-to-cart-button");
  }

  get updateWishlistButton() {
    return $(".common-buttons>.button-2.update-wishlist-button");
  }
  get itemsQuantity() {
    return $(".qty-input");
  }

  get totalPrice() {
    return $$(".product-subtotal");
  }

  get shareLink() {
    return $(".share-link");
  }

  get listOfAddedItems() {
    return $$(".cart-item-row .product");
  }

  async updateQualtity(value) {
    await this.itemsQuantity.waitForDisplayed();
    await this.itemsQuantity.setValue(value);
    await this.updateWishlistButton.waitForDisplayed();
    await this.updateWishlistButton.click();
  }
  async gotoWishlistByLink() {
    await this.shareLink.waitForDisplayed();
    await this.shareLink.click();
  }

  async moveItemToCart() {
    await this.addToCartCheckbox.waitForDisplayed();
    await this.addToCartCheckbox.click();
    await this.addToCartButoon.waitForDisplayed();
    await this.addToCartButoon.click();
  }

  async removingProductsFromCart() {
    if ((await this.updateWishlistButton.isDisplayed()) === true) {
      const elems = await this.removeCheckbox;
      await elems.forEach((elem) => {
        return elem.click();
      });
      await this.updateWishlistButton.click();
    }
  }
}

module.exports = new WishlistPage();
