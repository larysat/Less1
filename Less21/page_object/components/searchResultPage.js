const Base = require("./base");

class SearchResultsPage extends Base {
  get countOfSearchResult() {
    return cy.get(".mt-4 .flex-grow-1");
  }
}

module.exports = new SearchResultsPage();
