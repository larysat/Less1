const axios = require("axios");
const { Validator } = require("jsonschema");
const getActivitiesJsonSchema = require("../testData/putUsers.v1.json");

const validator = new Validator();

describe("API tests", function () {
  let result;
  let getUserById = 7;
  this.beforeAll(async () => {
    result = await axios.put(
      `https://fakerestapi.azurewebsites.net/api/v1/Users/${getUserById}`,
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

  test("/api/v1/Users PUT should be status 200", async () => {
    console.log(result);
    expect(result.status).toEqual(200);
  });

  test("/api/v1/Users PUT should be valid jsonschema", async () => {
    const validationResult = await validator.validate(
      result.data,
      getActivitiesJsonSchema
    );
    expect(validationResult.valid).toEqual(true);
  });
});
