// full name tests
const formatFullname = require("./formatFullname");
const { expect } = require("chai");

describe("formatFullname", () => {
  it("should return 'Error' if the argument is empty", () => {
    expect(formatFullname("")).to.equal("Error");
  });

  it("should return 'Error' if the argument is not a string", () => {
    const nonStringValues = [undefined, 12, {}, [], () => {}];
    nonStringValues.forEach(value => {
      expect(formatFullname(value)).to.equal("Error");
    });
  });

  it("should return 'Error' if the argument does not match '<firstname> <lastname>' format", () => {
    const invalidFormats = ["John", "John Doe test"];
    invalidFormats.forEach(value => {
      expect(formatFullname(value)).to.equal("Error");
    });
  });

  it("should correctly format first and last names with only the first letter capitalized", () => {
    const testCases = [
      { input: "john doe", expected: "John Doe" },
      { input: "JoHn DOE", expected: "John Doe" },
      { input: "joHN dOe", expected: "John Doe" },
      { input: "amanda doe", expected: "Amanda Doe" },
      { input: "AMANDA DOE", expected: "Amanda Doe" },
      { input: "aMaNdA dOe", expected: "Amanda Doe" },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(formatFullname(input)).to.equal(expected);
    });
  });
});
