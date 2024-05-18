const Base = require("./base");

class MiniShoppingCart extends Base {
  get countInMiniShoppingCart() {
    return $(".mini-shopping-cart .quantity");
  }
  get goToCardInMiniShoppingCart() {
    return $(".button-1.cart-button");
  }
}

module.exports = new MiniShoppingCart();
