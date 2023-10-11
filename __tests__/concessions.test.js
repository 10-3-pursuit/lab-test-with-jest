const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

const concessionsData = require("../data/concessions");

describe("Concessions", () => {
  describe("getConcessionByID()", () => {
    it("should return a concession object that matches the input ID", () => {
      const input1 = concessionsData;
      const input2 = "NEHAsbTYk";
      const actual = getConcessionByID(input1, input2);
      const expected = {
        id: "NEHAsbTYk",
        name: "Large Soda",
        priceInCents: 749,
      };
      expect(actual).toEqual(expected);
    });
    it("should return null if the concessions array is empty", () => {
      const input1 = [];
      const input2 = "NEHAsbTYk";
      const actual = getConcessionByID(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });
    it("should return null if there is no concession object that matches the input ID", () => {
      const input1 = concessionsData;
      const input2 = "AjHAsLKYk";
      const actual = getConcessionByID(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });
  });

  describe("calculateTotalFromIDs()", () => {
    it("should return 0 if the concession array is empty", () => {
      const input1 = [];
      const input2 = "NEHAsbTYk";
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 0;
      expect(actual).toBe(expected);
    });
    it("should return 0 if the input id DOES NOT match the id inside of the concessions object", () => {
      const input1 = concessionsData;
      const input2 = ["AjHAsJKYk"];
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 0;
      expect(actual).toBe(expected);
    });
    it("should return the price in cents if the input ID does match the id in the object", () => {
      const input1 = concessionsData;
      const input2 = ["NEHAsbTYk"];
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 749;
      expect(actual).toEqual(expected);
    });
  });
});
