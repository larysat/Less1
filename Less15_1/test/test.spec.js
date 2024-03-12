const Calculator = require("../calculator.js");
//import { Calculator } from "../calculator.js";
const calculator = new Calculator();

describe("validation the working of the calculator for adding", () => {
  const testCase = [
    {
      in: [1, 2, 3],
      expected: 6,
    },
    {
      in: [0, 2, -3],
      expected: -1,
    },
    {
      in: [100, -100, 500],
      expected: 500,
    },
    {
      in: [20, "test"],
      expected: NaN,
    },
  ];
  testCase.forEach((test) => {
    it(`should return ${test.expected} if terms are ${test.in}`, () => {
      const resSumm = calculator.add(...test.in);
      expect(resSumm).toEqual(test.expected);
    });
  });
});

describe("validation the working of the calculator for multiply", () => {
  const testCase = [
    {
      in: [4, 2, 0.5],
      expected: 4,
    },
    {
      in: [7, 2, -3],
      expected: -42,
    },
    {
      in: [10, 0, 8],
      expected: 0,
    },
    {
      in: [0.1, 0.2, 0.3],
      expected: 0.006,
    },
    {
      in: [10, 0, "test"],
      expected: "error message",
    },
  ];
  testCase.forEach((test) => {
    it(`should return ${test.expected} if terms are ${test.in}`, () => {
      const resMultiplay = calculator.multiply(...test.in);
      expect(+resMultiplay.toFixed(4)).toEqual(test.expected);
    });
  });
});

describe("validation the working of the calculator for subtraction", () => {
  test("should return 3 if minuend is 7 and subtrahend is 4", async () => {
    const result = calculator.subtraction(7, 4);
    expect(result).toBe(3);
  });

  test("should return -5 if minuend is 3 and subtrahend is 8", async () => {
    const result = calculator.subtraction(3, 8);
    expect(result).toBe(-5);
  });

  test("should return NaN if minuend is srting and subtrahend is 8", async () => {
    const result = calculator.subtraction("test", 8);
    expect(result).toEqual(NaN);
  });

  describe("validation the working of the calculator for divide", () => {
    test("should return 3,5 if dividend is 7 and divider is 2", async () => {
      const result = calculator.divide(7, 2);
      expect(result).toBe(3.5);
    });

    test("should return 0 if dividend is 3 and divider is 8", async () => {
      const result = calculator.divide(0, 8);
      expect(result).toBe(0);
    });

    test("should return Infinity if dividend is 8 and divider is 0", async () => {
      const result = calculator.divide(8, 0);
      expect(result).toEqual(Infinity);
    });
  });

  describe("validation the working of the calculator for exponentiation", () => {
    const testCase = [
      {
        in: 10,
        expected: 100,
      },
      {
        in: -3,
        expected: 9,
      },
      {
        in: 0.2,
        expected: 0.04,
      },
      {
        in: "test",
        expected: NaN,
      },
    ];
    testCase.forEach((test) => {
      it(`should return ${test.expected} if multiplier is ${test.in}`, () => {
        const resExponentiation = calculator.exponentiation(test.in);
        expect(+resExponentiation.toFixed(4)).toEqual(test.expected);
      });
    });
  });
});
