const Base = require("./base");

class CardPage extends Base {
  get removeCheckbox() {
    return $$(".cart-item-row .remove-from-cart");
  }

  get updateCartButton() {
    return $(".common-buttons>.button-2.update-cart-button");
  }

  get totalPrice() {
    return $(".cart-total");
  }

  get productName() {
    return $$(".product-name");
  }

  async removingProductsFromCart() {
    if ((await this.updateCartButton.isDisplayed()) === true) {
      const elems = await this.removeCheckbox;
      await elems.forEach((elem) => {
        return elem.click();
      });
      await this.updateCartButton.click();
    }
  }
}

module.exports = new CardPage();
