const BaseHW = require("../baseHW");

class LoginPageHW extends BaseHW {
  constructor(page) {
    super(page);
  }
  get mainSingInButton() {
    return ".justify-content-end .flyout__js-open.position-relative";
  }

  get emailLoginField() {
    return ".flyout__field.d-flex>#email";
  }
  get passwordLoginField() {
    return ".flyout__field.d-flex>#password";
  }

  async loginByEmailAndPassword(email, password) {
    await this.page.waitForSelector(this.mainSingInButton);
    await this.page.click(this.mainSingInButton);
    await this.page.waitForSelector(this.emailLoginField);
    await this.page.fill(this.emailLoginField, email);
    await this.page.waitForSelector(this.passwordLoginField);
    await this.page.click(this.passwordLoginField);
    await this.page.fill(this.passwordLoginField, password);
    await this.page.keyboard.press("Enter");
  }
}

module.exports = LoginPageHW;
