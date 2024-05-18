const mainPage = require("../pageobjects/mainPage");
const loginPage = require("../pageobjects/loginPage");
const headerToolbar = require("../pageobjects/components/headerToolbar");
const categoriesSidebar = require("../pageobjects/components/categoriesSidebar");
const footerMenu = require("../pageobjects/components/footerMenu");
const wishlistPage = require("../pageobjects/wishlistPage");
const productPage = require("../pageobjects/productPage");
const cartPage = require("../pageobjects/cartPage");

describe("Validaion of product searching and adding to Wishlist", () => {
  before(async () => {
    await mainPage.navigate("https://demowebshop.tricentis.com");
    await headerToolbar.gotoLoginPage();
    await loginPage.loginAsExistingUser();
    await headerToolbar.logOut();
  });

  afterEach(async () => {
    await footerMenu.gotoWishlist();
    await wishlistPage.removingProductsFromCart();
    await footerMenu.gotoShoppingCart();
    await cartPage.removingProductsFromCart();
  });

  it("Check that the product can be moved to Shopping card from Wishlist", async () => {
    await headerToolbar.searchProduct("Create Your Own Jewelry");
    await mainPage.openFoundProduct();
    await productPage.setLength(25);
    await productPage.addToWishList();
    await footerMenu.gotoWishlist();
    await wishlistPage.moveItemToCart();
    expect(await cartPage.productName[0].getText()).toContain(
      "Create Your Own Jewelry"
    );
  });

  it("Check that total price is changed correctly after updating quantity of products in Wishlist", async () => {
    await headerToolbar.searchProduct("Smartphone");
    await mainPage.openFoundProduct();
    await productPage.addToWishList();
    await footerMenu.gotoWishlist();
    await wishlistPage.updateQualtity(2);
    expect(await wishlistPage.totalPrice[0].getText()).toEqual("200.00");
  });

  it("Check that popun message appears when if user tries to add the product in Wishlist when required fields are not filled in", async () => {
    await headerToolbar.searchProduct("Create Your Own Jewelry");
    await mainPage.openFoundProduct();
    await productPage.addToWishList();
    expect(await productPage.popupErrorMessage.isDisplayed());
  });

  it("Check that link generated in Wishlist redirects to List of added product in Wishlist", async () => {
    await headerToolbar.searchProduct("TCP Self-Paced Training");
    await mainPage.openFoundProduct();
    await productPage.addToWishList();
    await footerMenu.gotoWishlist();
    await wishlistPage.gotoWishlistByLink();
    expect(await wishlistPage.listOfAddedItems[0]).toBePresent();
  });
});
