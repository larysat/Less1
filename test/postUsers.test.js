const axios = require("axios");
const { Validator } = require("jsonschema");
const getActivitiesJsonSchema = require("../testData/postUsers.v1.json");

const validator = new Validator();

describe("API POST tests", function () {
  let result;
  this.beforeAll(async () => {
    result = await axios.post(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/",
      {
        id: 0,
        userName: "string",
        password: "string",
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json; v=1.0",
        },
      }
    );
  });

  test("POST /api/v1/Users should be status 200", async () => {
    expect(result.status).toEqual(200);
  });

  test("POST /api/v1/Users should be valid jsonschema", async () => {
    const validationResult = await validator.validate(
      result.data,
      getActivitiesJsonSchema
    );
    expect(validationResult.valid).toEqual(true);
  });
});
