const calculateNumber = require("./1-calcul");
const expect = require("chai").expect;

describe("calculateNumber in SUMATION", function () {
  it("tests the result", function () {
    expect(calculateNumber("SUM", 1.4, 4.5), 6);
    expect(calculateNumber("SUM", 4.5, 1.4), 6);
    expect(calculateNumber("SUM", -1, 1), 0);
    expect(calculateNumber("SUM", -1, -1), -2);
    expect(calculateNumber("SUM", 2.3, 2.2), 4);
    expect(calculateNumber("SUM", 1, 5), 6);
    expect(calculateNumber("SUM", 0.0, 0), 0);
  });
});
describe("calculateNumber in SUBTRACTION", function () {
  it("tests the result", function () {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5), 4);
    expect(calculateNumber("SUBTRACT", 3.1, 2.5), 0);
    expect(calculateNumber("SUBTRACT", 4.5, 2), -3);
    expect(calculateNumber("SUBTRACT", 0.0, 5), 5);
    expect(calculateNumber("SUBTRACT", 2, 4.5), 3);
    expect(calculateNumber("SUBTRACT", -1, 1), -2);
    expect(calculateNumber("SUBTRACT", -1.5, 0), -1);
  });
});
describe("calculateNumber in DIVISION", function () {
  it("tests the result", function () {
    expect(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    expect(calculateNumber("DIVIDE", 1.4, 0), "Error");
    expect(calculateNumber("DIVIDE", -1, -1), 1);
  });
});
