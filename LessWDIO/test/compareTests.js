const mainPage = require("../pageobjects/mainPage");
const loginPage = require("../pageobjects/loginPage");
const headerToolbar = require("../pageobjects/components/headerToolbar");
const productPage = require("../pageobjects/productPage");
const comparePage = require("../pageobjects/comparePage");
const footerMenu = require("../pageobjects/components/footerMenu");

describe("Validaion of product searching and adding to card", () => {
  before(async () => {
    await mainPage.navigate("https://demowebshop.tricentis.com");
  });

  after(async () => {
    await footerMenu.gotoCompareProducts();
    await comparePage.clearCompateTable();
  });

  it("Check that added products are displayed in Compare List", async () => {
    await headerToolbar.gotoLoginPage();
    await loginPage.loginAsExistingUser();
    await headerToolbar.searchProduct("Black & White Diamond Heart");
    await mainPage.openFoundProduct();
    await productPage.addToCompareList();
    await headerToolbar.searchProduct("Diamond Pave Earrings");
    await mainPage.openFoundProduct();
    await productPage.addToCompareList();
    expect(await comparePage.tableWithProcucts[0]).toBePresent();
    expect(await comparePage.tableWithProcucts[1]).toBePresent();
  });
});
