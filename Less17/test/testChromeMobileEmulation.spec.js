import { By, until, Builder, Key } from "selenium-webdriver";
import { expect } from "chai";
describe.skip("Validation Mobile Emulation link", function () {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.manage().window().setSize({ width: 1300, height: 1280 });
  });

  after(async () => {
    await driver.quit();
  });

  it("check that 'Mobile Emulation' page url includes /mobile-emulation", async () => {
    //зайти на сайт
    await driver.get("https://chromedriver.chromium.org/home");
    //найти Serching по css-локаторуи кликнуть его

    const moreButton = await driver.findElement(
      By.css(".VsJjtf.oXBWEc .aJHbb.dk90Ob")
    );
    //await driver.manage().setTimeouts({ implicit: 5000 });
    await moreButton.click();
    const pointMobileEmulation = await driver.findElement(
      By.css('.VsJjtf.oXBWEc a[href*="/mobile-emulation"]')
    );
    //await driver.manage().setTimeouts({ implicit: 500 });
    await pointMobileEmulation.click();

    const linkMobileEmulation = await driver.executeScript(
      "return document.URL;"
    );
    console.log(linkMobileEmulation);
    expect(await linkMobileEmulation).to.contains("/mobile-emulation");
  });
});
