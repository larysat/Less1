const BaseHW = require("./baseHW");

class mainPageHW extends BaseHW {
  // Button to start search
  get searchButton() {
    return $(".DocSearch-Button");
  }

  //Field to set criteria
  get searchField() {
    return $(".DocSearch-Input");
  }

  //First presented with presented results of searching
  get firstLink() {
    return $('[href="/docs/visual-testing/writing-tests/"]');
  }
  //Sub-Title of  'Writing Tests' page
  get titleOfWritingTestsPage() {
    return $(".anchorWithStickyNavbar_LWe7");
  }

  //Container  of main page
  get containerOfeMainPage() {
    return $(".main-wrapper");
  }

  //Header of 'Need Help?' page
  get titleNeedHelpPage() {
    return $(".theme-doc-markdown.markdown>header");
  }

  //Horizontal navigation menu
  get suggestPointMenuList() {
    return $$(".navbar__inner>div:first-child .navbar__item.navbar__link");
  }
  //Langualge List button
  get selectLanguageIcon() {
    return $(".dropdown--right .navbar__link");
  }

  //Langualge menu
  get suggestLangualgeList() {
    return $$(".dropdown__menu .dropdown__link");
  }

  //Searching by criteria
  async searchingByCriteria(searchCriteria) {
    await this.searchButton.waitForDisplayed();
    await this.searchButton.click();
    await this.searchField.waitForDisplayed();
    await this.searchField.setValue(searchCriteria);
    await this.firstLink.waitForDisplayed();
    await this.firstLink.click();
  }
  //select point of horizontal navigation menu
  async gotoSuggestPointMenuByName(pointNumber) {
    await this.suggestPointMenuList[pointNumber].waitForDisplayed();
    await this.suggestPointMenuList[pointNumber].click();
  }
  //select point of Languale point menu
  async gotoSuggesLanguageByNumber(languageNumber) {
    await this.selectLanguageIcon.waitForDisplayed();
    await this.selectLanguageIcon.click();
    await this.suggestLangualgeList[languageNumber].waitForDisplayed();
    await this.suggestLangualgeList[languageNumber].click();
  }
}

module.exports = new mainPageHW();
