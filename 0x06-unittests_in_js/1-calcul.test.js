const assert = require("chai").assert;
const calculateNumber = require("./1-calcul");

describe("calculateNumber in SUMATION", function () {
  it("tests the result", function () {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber("SUM", 4.5, 1.4), 6);
    assert.strictEqual(calculateNumber("SUM", -1, 1), 0);
    assert.strictEqual(calculateNumber("SUM", -1, -1), -2);
    assert.strictEqual(calculateNumber("SUM", 2.3, 2.2), 4);
    assert.strictEqual(calculateNumber("SUM", 1, 5), 6);
    assert.strictEqual(calculateNumber("SUM", 0.0, 0), 0);
  });
});
describe("calculateNumber in SUBTRACTION", function () {
  it("tests the result", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), 4);
    assert.strictEqual(calculateNumber("SUBTRACT", 3.1, 2.5), 0);
    assert.strictEqual(calculateNumber("SUBTRACT", 4.5, 2), -3);
    assert.strictEqual(calculateNumber("SUBTRACT", 0.0, 5), 5);
    assert.strictEqual(calculateNumber("SUBTRACT", 2, 4.5), 3);
    assert.strictEqual(calculateNumber("SUBTRACT", -1, 1), -2);
    assert.strictEqual(calculateNumber("SUBTRACT", -1.5, 0), -1);
  });
});
describe("calculateNumber in DIVISION", function () {
  it("tests the result", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", -1, -1), 1);
  });
});
