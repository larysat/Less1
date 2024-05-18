const axios = require("axios");
const { Validator } = require("jsonschema");
//const getActivitiesJsonSchema = require("../testData/getActivities.v1.json");

const validator = new Validator();
describe("API tests", function () {
  let result;
  beforeAll(async () => {
    result = await axios.get(
      "https://webservice.toscacloud.com/Echo/https%3A%2F%2Fdemowebshop.tricentis.com%2Fcart123",
      {
        headers: {
          //accept: "text/plain; v=1.0",
        },
      }
    );
  });

  test("GET /api/v1/Activities should be status 200", async () => {
    expect(result.status).toEqual(200);
  });

  /* test('GET /api/v1/Activities should be valid jsonschema', async () => {
        const validationResult = await validator.validate(result.data, getActivitiesJsonSchema);
        console.log(validationResult)
        expect(validationResult.valid).toEqual(true)
    }) */
});
