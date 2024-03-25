const axios = require("axios");
const { Validator } = require("jsonschema");
const getActivitiesJsonSchema = require("../testData/getUsers.v1.json");

const validator = new Validator();

describe("API tests", function () {
  let result;
  this.beforeAll(async () => {
    result = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users",
      {
        headers: {
          accept: "text/plain; v=1.0",
        },
      }
    );
  });

  test("/api/v1/Users should be status 200", async () => {
    expect(result.status).toEqual(200);
  });

  test("/api/v1/Users should be valid jsonschema", async () => {
    const validationResult = await validator.validate(
      result.data,
      getActivitiesJsonSchema
    );
    expect(validationResult.valid).toEqual(true);
  });
});
