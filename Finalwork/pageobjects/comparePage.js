const Base = require("./base");

class ComparePage extends Base {
  get tableWithProcucts() {
    return $$(".product-name .a-center");
  }
  get removeButton() {
    return $$(".button-2.remove-button");
  }

  get clearAllButton() {
    return $(".clear-list");
  }

  async clearCompateTable() {
    await this.clearAllButton.waitForDisplayed();
    await this.clearAllButton.click();
  }
}

module.exports = new ComparePage();
