const mainPage = require("../../page_object/components/mainPage");
const searchResultPage = require("../../page_object/components/searchResultPage");
const newsLetterPopup = require("../../page_object/components/newsLetterPopup");
const loginPage = require("../../page_object/components/loginPage");
const navigationPanel = require("../../page_object/components/navigationPanel");
const contactUsPage = require("../../page_object/components/contactUsPage");
const subscriptionPage = require("../../page_object/components/subscriptionPage");

describe("all tests", () => {
  beforeEach(() => {
    mainPage.navigate("https://www.foreignaffairs.com/");
    newsLetterPopup.closeNewsLetterPopup();
  });

  it.skip("Check that searching by 'Stephen Walker' criteria founds 6 results", () => {
    mainPage.foundBySearchCriteria("Stephen Walker");
    cy.validateElementsText(
      searchResultPage.countOfSearchResult,
      "6 Search Results for Stephen Walker"
    );
  });
  it.skip("Check that ACCOUNT button is displayed after login with invalid password", () => {
    mainPage.singInButton.click();
    loginPage.loginByEmailAndPassword("odofy@mailto.plus", "testTest@123");
    cy.get(mainPage.accountButton).should("be.visible");
  });

  it.skip("Check that Contact Us page is opened via navigation panel", () => {
    mainPage.responsiveNavBarButton.click();
    navigationPanel.responsiveNavAccordionContactLink.click();
    contactUsPage.contactUsPageTitle.should("be.visible");
  });

  it("Check that alert apeears when user subscribes with invalid email", () => {
    mainPage.subscribeButton.click();
    subscriptionPage.setEmail("@test");
    cy.type("Cypress.io{enter}");
    cy.validateElementsText(
      subscriptionPage.alertDanger,
      "The email address @test is not valid. Use the format user@example.com."
    );
  });
});
