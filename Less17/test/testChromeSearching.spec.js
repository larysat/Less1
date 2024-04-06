import { By, until, Builder, Key } from "selenium-webdriver";
import { expect } from "chai";
describe.skip("Validation ChromeDriver serching", function () {
  let driver;

  before(async () => {
    driver = new Builder().forBrowser("chrome").build();
    await driver.manage().window().setSize({ width: 1300, height: 1280 });
  });

  after(async () => {
    await driver.quit();
  });

  it("check that 'driver' is contained in the search result", async () => {
    //зайти на сайт
    await driver.get("https://chromedriver.chromium.org/home");
    //найти Serching по css-локаторуи кликнуть его
    const searchButton = await driver.findElement(By.css(".RBEWZc .U26fgb"));
    await searchButton.click();
    await driver.manage().setTimeouts({ implicit: 5000 });
    //найти поле поиска по css-локаторуи
    const searchField = await driver.findElement(By.css("div.Xb9hP > input"));
    //ввести в поле "driver' и нажать на кнопку лупы
    await searchField.sendKeys("driver");
    await driver.manage().setTimeouts({ implicit: 500 });
    const loupeButton = await driver.findElement(
      By.css(".A37UZe.qgcB3c.iHd5yb>div:first-child")
    );
    await loupeButton.click();

    //найти первую ссылку и проверить что там есть текст "driver"
    const firstLink = await driver.findElement(
      By.css(".lZsZxe.lZsZxe>div:first-child .vH0yjd")
    );
    expect(await firstLink.getText()).to.contain("driver");
  });
});
