import { By, until, Builder } from "selenium-webdriver";
import { expect } from "chai";
describe("Validation ChromeDriver and Chrome Extensions page titles", function () {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.manage().window().setSize({ width: 1300, height: 1280 });
  });

  after(async () => {
    await driver.quit();
  });

  it("check that text of main title should be 'ChromeDriver'", async () => {
    //зайти на сайт
    await driver.get("https://chromedriver.chromium.org/home");
    //найти текст у Title по css-локатору и проветить его
    const titleChromeDriver = await driver.findElement(
      By.css(".Rn3Z1b.C9DxTc")
    );
    expect(await titleChromeDriver.getText()).to.equal("ChromeDriver");
    const pointChromeExtensions = await driver.findElement(
      By.css(".Pvc6xe>.plFg0c>.K1Ci7d>li:nth-child(3) .I35ICb")
    );
  });
  it("check that title of the next page is 'Chrome Extensions'", async () => {
    //зайти на сайт
    await driver.get("https://chromedriver.chromium.org/home");
    //найти текст у Title по css-локатору и проветить его
    const titleChromeDriver = await driver.findElement(
      By.css(".Rn3Z1b.C9DxTc")
    );
    const pointChromeExtensions = await driver.findElement(
      By.css(".Pvc6xe>.plFg0c>.K1Ci7d>li:nth-child(3) .I35ICb")
    );
    await pointChromeExtensions.click();

    //проверить что новый тайтл "Chrome Extensions";
    const titleChromeExtensions = await driver.findElement(
      By.css(".Depvyb>.CDt4Ke.zfr3Q>.Rn3Z1b")
    );
    expect(await titleChromeExtensions.getText()).to.equal("Chrome Extensions");
    //подсветить элемент
    driver.executeScript(
      'arguments[0].style.backgroundColor = "yellow"',
      titleChromeExtensions
    );
  });
});
