const mainPage = require("../pageobjects/mainPage");
const registrationPage = require("../pageobjects/registrationPage");
const headerToolbar = require("../pageobjects/components/headerToolbar");

describe("Validaion of Registration functionality", () => {
  before(async () => {
    await mainPage.navigate("https://demowebshop.tricentis.com");
  });
  after(async () => {
    await headerToolbar.logOut();
  });

  const testCase = [
    {
      in: ["Anna", "", "pass123", "pass123"],
      expected: "Last name is required.",
    },
    {
      in: ["", "Wide", "pass000", "pass000"],
      expected: "First name is required.",
    },
    {
      in: ["Anna", "Wide", "pass000", "pass001"],
      expected: "The password and confirmation password do not match.",
    },
    {
      in: ["Anna", "Wide", "pass000", ""],
      expected: "Password is required.",
    },
  ];
  testCase.forEach((test) => {
    it(`should return ${test.expected} error message is user left empty some required field`, async () => {
      await headerToolbar.gotoRegisterPage();
      await registrationPage.executeRegistration(...test.in);
      expect(await registrationPage.failedValidationError.getText()).toContain(
        test.expected
      );
    });
  });
  it("Check that user can be registrated with correct data", async () => {
    await headerToolbar.gotoRegisterPage();
    await registrationPage.executeRegistration(
      "Test",
      "Test",
      "123456",
      "123456"
    );
    expect(await registrationPage.confirmationOfRegistration()).toBePresent();
  });
});
