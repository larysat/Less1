const Base = require("../base");

class CategoriesSidebar extends Base {
  get categoriesList() {
    return $$(".block.block-category-navigation>.listbox>.list>.inactive");
  }

  async selectCategoryByNumber(number) {
    await this.categoriesList[number].waitForDisplayed();
    await this.categoriesList[number].click();
  }
}

module.exports = new CategoriesSidebar();
