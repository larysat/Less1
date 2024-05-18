const mainPage = require("../pageobjects/mainPage");
const loginPage = require("../pageobjects/loginPage");
const cartPage = require("../pageobjects/cartPage");
const headerToolbar = require("../pageobjects/components/headerToolbar");
const footerMenu = require("../pageobjects/components/footerMenu");
const productPage = require("../pageobjects/productPage");

describe("Validaion of product searching and adding to card", () => {
  before(async () => {
    await mainPage.navigate("https://demowebshop.tricentis.com");
    await headerToolbar.gotoLoginPage();
    await loginPage.loginAsExistingUser();
  });

  afterEach(async () => {
    await footerMenu.gotoShoppingCart();
    await cartPage.removingProductsFromCart();
    await headerToolbar.logOut();
  });
  it("Check that the purchase counter increases after adding items", async () => {
    await headerToolbar.searchProduct("Black & White Diamond Heart");
    await mainPage.addingToCartSearchResult();
    await headerToolbar.searchProduct("14.1-inch Laptop");
    await mainPage.addingToCartSearchResult();
    await headerToolbar.searchProduct("Health Book");
    await mainPage.addingToCartSearchResult();
    expect(await headerToolbar.topCartLink.getText()).toContain("(3)");

    it("Check that the total amount of items is displayed correctly in the cart", async () => {
      await headerToolbar.searchProduct("Belt");
      await mainPage.addingToCartSearchResult();
      await headerToolbar.searchProduct("Blue and green Sneaker");
      await mainPage.openFoundProduct();
      await productPage.addToCardWithAttributes();
      await headerToolbar.gotoCartPage();
      expect(await cartPage.totalPrice.getText()).toContain("12.00");
    });
  });
});
