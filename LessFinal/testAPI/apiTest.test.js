const axios = require("axios");
describe("API tests", function () {
  let resultGet;
  beforeAll(async () => {
    resultGet = await axios.get(
      "https://demowebshop.tricentis.com/50s-rockabilly-polka-dot-top-jr-plus-size"
    );
  });

  test("Get request should have status 200", async () => {
    console.log(resultGet.status);
    expect(resultGet.status).toEqual(200);
  });
});

describe("API POST test", function () {
  let resultPost;
  beforeAll(async () => {
    resultPost = await axios.post(
      "https://demowebshop.tricentis.com/addproducttocart/details/5/1",
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
  });

  test("POST reguest should have status 200", async () => {
    console.log(resultPost.status);
    expect(resultPost.status).toEqual(200);
  });
});
