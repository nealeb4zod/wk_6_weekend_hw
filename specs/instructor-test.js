const assert = require("assert");
const Instructor = require("../js/instructor.js");

describe("Instructor", function () {
  let instructor;

  beforeEach(() => {
    instructor = new Instructor(
      "Juan",
      "Mata Ruiz",
      "Actually from Peterhead",
      "They might leave..."
    );
  });
  it("should have a first name", () => {
    const actual = instructor.first_name;
    assert.strictEqual(actual, "Juan");
  });

  it("should have a last name", () => {
    const actual = instructor.last_name;
    assert.strictEqual(actual, "Mata Ruiz");
  });
  it("should have an interesting fact", () => {
    const actual = instructor.interesting_fact;
    assert.strictEqual(actual, "Actually from Peterhead");
  });
  it("should have a likelihood", () => {
    const actual = instructor.likelihood;
    assert.strictEqual(actual, "They might leave...");
  });
});
