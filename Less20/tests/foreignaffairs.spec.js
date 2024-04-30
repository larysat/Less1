const { test, expect } = require("@playwright/test");
const MainPageHW = require("../page_object/mainPageHW");
const SearchingHW = require("../page_object/components/searchingHW");
const LoginPageHW = require("../page_object/components/loginPageHW");
const ResponsiveNavBarHW = require("../page_object/components/responsiveNavBarHW");

test.describe("foreignaffairs.com test", async function () {
  let mainPageHW;
  let searchingHW;
  let loginPageHW;
  let responsiveNavBarHW;

  test.beforeEach(async ({ page, context }) => {
    mainPageHW = new MainPageHW(page);
    searchingHW = new SearchingHW(page);
    loginPageHW = new LoginPageHW(page);
    responsiveNavBarHW = new ResponsiveNavBarHW(page);
  });

  test("Should go to needed page", async ({ page }) => {
    await mainPageHW.navigate("https://www.foreignaffairs.com/");
    await searchingHW.foundBySearchCriteria("Stephen Walker");
    await expect(await page.url()).toContain("/Stephen%20Walker");
    await page.waitForTimeout(2000);
  });

  test("Should found needed count of results by set criteria", async ({
    page,
  }) => {
    await mainPageHW.navigate("https://www.foreignaffairs.com/");
    await searchingHW.foundBySearchCriteria("Le Maroc");
    const searchResults = await searchingHW.countOfSearchResult();
    await expect(searchResults).toContainText("14 Search Results for Le Maroc");
    await page.waitForTimeout(2000);
  });

  test("Should display ACCOUT button after login", async ({ page }) => {
    await mainPageHW.navigate("https://www.foreignaffairs.com/");
    await loginPageHW.loginByEmailAndPassword(
      "hokep@mailto.plus",
      "testLarisaLarisa#11"
    );
    const accountButtonDisplaying = await mainPageHW.accountButton();
    await expect(accountButtonDisplaying).toBeVisible();
    await page.waitForTimeout(2000);
  });

  test("Should open Contact Us page via responsive Nav Accordion", async ({
    page,
  }) => {
    await mainPageHW.navigate("https://www.foreignaffairs.com/");
    await responsiveNavBarHW.gotoContactPoinOfAccordion();
    const mainTitleOfContact = await responsiveNavBarHW.contactUsPageTitle();
    await expect(mainTitleOfContact).toContainText("Contact Us");
    await page.waitForTimeout(1000);
  });
});
