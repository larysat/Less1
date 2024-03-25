const axios = require("axios");

describe("API tests", function () {
  let result;
  let getUserById = 1;
  this.beforeAll(async () => {
    result = await axios.delete(
      `https://fakerestapi.azurewebsites.net/api/v1/Users/${getUserById}`,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
  });

  test("/api/v1/DELETE should be status 200", async () => {
    console.log(result);
    expect(result.status).toEqual(200);
  });
});
