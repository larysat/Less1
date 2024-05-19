const Base = require("./base");

class RegistrationPage extends Base {
  get firstNameInput() {
    return $(".form-fields >.inputs>#FirstName");
  }

  get lastNameInput() {
    return $(".form-fields >.inputs>#LastName");
  }
  get emailInput() {
    return $(".form-fields >.inputs>#Email");
  }

  get passwordInput() {
    return $(".form-fields >.inputs>#Password");
  }

  get confirmPasswordInput() {
    return $(".form-fields >.inputs>#ConfirmPassword");
  }

  get registerButton() {
    return $(".button-1.register-next-step-button");
  }

  get failedValidationError() {
    return $(".field-validation-error");
  }

  get cofirmMessage() {
    return $(".page-body>.result");
  }

  async confirmationOfRegistration() {
    await this.cofirmMessage.waitForDisplayed();
  }

  async makeEmail() {
    let strValues = "testEmail";
    let strEmail = "";
    let strTmp;
    for (let i = 0; i < 10; i++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (let j = 0; j < 8; j++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com";
    return String(strEmail);
  }

  async executeRegistration(name, lastname, pass, confPass) {
    await this.firstNameInput.waitForDisplayed();
    await this.firstNameInput.setValue(name);
    await this.lastNameInput.waitForDisplayed();
    await this.lastNameInput.setValue(lastname);
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(await this.makeEmail());
    await this.passwordInput.waitForDisplayed();
    await this.passwordInput.setValue(pass);
    await this.confirmPasswordInput.waitForDisplayed();
    await this.confirmPasswordInput.setValue(confPass);
    await this.registerButton.waitForDisplayed();
    await this.registerButton.click();
  }
}

module.exports = new RegistrationPage();
