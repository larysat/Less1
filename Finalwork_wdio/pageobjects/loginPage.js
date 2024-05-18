const headerToolbar = require("../pageobjects/components/headerToolbar");
const Base = require("./base");

class LoginPage extends Base {
  get passwordField() {
    return $(".password");
  }

  get emailField() {
    return $(".email");
  }

  get loginButton() {
    return $(".button-1.login-button");
  }

  get errorMessage() {
    return $(".validation-summary-errors");
  }

  get invalidEmailMessage() {
    return $(".field-validation-error");
  }

  async errorMessageDispalaying() {
    await this.errorMessage.waitForDisplayed();
  }
  async invalidEmailMessageDispalaying() {
    await this.invalidEmailMessage.waitForDisplayed();
  }

  async executeLogin(email, password) {
    await this.emailField.waitForDisplayed();
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
  async loginAsExistingUser() {
    await this.emailField.waitForDisplayed();
    await this.emailField.setValue("majavis234@shanreto.com");
    await this.passwordField.setValue("testNowak#111");
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
