const BaseHW = require("../baseHW");

class SearchingHW extends BaseHW {
  constructor(page) {
    super(page);
  }
  get loupButton() {
    return ".header-navbar-link.header-ctas-link-search";
  }

  get searchInput() {
    return ".site-search__input";
  }
  get searchButton() {
    return ".site-search__button.ms-3.text-uppercase";
  }

  async countOfSearchResult() {
    return this.page.locator(".mt-4 .flex-grow-1");
  }

  async foundBySearchCriteria(searchCriteria) {
    await this.page.waitForSelector(this.loupButton);
    await this.page.click(this.loupButton);
    await this.page.waitForSelector(this.searchInput);
    await this.page.fill(this.searchInput, searchCriteria);
    await this.page.waitForSelector(this.searchButton);
    await this.page.click(this.searchButton);
  }
}

module.exports = SearchingHW;
