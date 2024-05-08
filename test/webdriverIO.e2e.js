const mainPageHW = require("../pageobjects/mainPageHW");

describe("WebdiverIO smoke tests ", () => {
  it("validation that searching finds needed content", async () => {
    await mainPageHW.navigate("https://webdriver.io/");
    await mainPageHW.searchingByCriteria("Writing Test");
    expect(await mainPageHW.titleOfWritingTestsPage.getText()).toEqual(
      "Testrunner Framework Support"
    );
    await browser.pause(4000);
  });
  it("validation that horizontal navigation menu forwards to needed page", async () => {
    await mainPageHW.navigate("https://webdriver.io/");
    await mainPageHW.gotoSuggestPointMenuByName(4);
    expect(await mainPageHW.titleNeedHelpPage.getText()).toEqual("Need Help?");
    await browser.pause(4000);
  });

  it("validation that selected Language is applied for WebdiverIO site", async () => {
    await mainPageHW.navigate("https://webdriver.io/");
    await mainPageHW.gotoSuggesLanguageByNumber(6);
    expect(await mainPageHW.containerOfeMainPage.getText()).toContain(
      "بعدی و چارچوب تست اتوماسیون"
    );
    await browser.pause(2000);
  });
});
