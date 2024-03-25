const axios = require("axios");
const { Validator } = require("jsonschema");
const getActivitiesJsonSchema = require("../testData/getUsersID.v1.json");

const validator = new Validator();

describe("API tests", function () {
  let result;
  let getUserById = 3;
  this.beforeAll(async () => {
    result = await axios.get(
      `https://fakerestapi.azurewebsites.net/api/v1/Users/${getUserById}`,
      {
        headers: {
          accept: "accept: */*",
        },
      }
    );
  });

  test("/api/v1/Users should be status 200", async () => {
    console.log(result);
    expect(result.status).toEqual(200);
  });

  test("/api/v1/Users ID should be valid jsonschema", async () => {
    const validationResult = await validator.validate(
      result.data,
      getActivitiesJsonSchema
    );
    console.log(validationResult);
    expect(validationResult.valid).toEqual(true);
  });
});
