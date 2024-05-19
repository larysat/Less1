const mainPage = require("../pageobjects/mainPage");
const loginPage = require("../pageobjects/loginPage");
const headerToolbar = require("../pageobjects/components/headerToolbar");

describe("Validaion of Login functionality ", () => {
  before(async () => {
    await mainPage.navigate("https://demowebshop.tricentis.com");
    await headerToolbar.gotoLoginPage();
  });
  after(async () => {
    await headerToolbar.logOut();
  });

  it(" Check that error message aprrears after login with invalid password", async () => {
    await loginPage.executeLogin("majavis234@shanreto.com", "testNowak#777");
    expect(await loginPage.errorMessageDispalaying()).toExist();
  });

  it(" Check that error message aprrears if entered email has incorrect format", async () => {
    await loginPage.executeLogin("majavis234@", "testNowak#111");
    expect(await loginPage.invalidEmailMessageDispalaying()).toBePresent();
  });

  it(" Check that user's email displayed after login with valid login/password", async () => {
    await loginPage.executeLogin("majavis234@shanreto.com", "testNowak#111");
    expect(await headerToolbar.accountButton.getText()).toEqual(
      "majavis234@shanreto.com"
    );
  });
});
