const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js");
const data = require("../data/concessions.js");

describe("Concessions", () => {
  describe("getConcessionByID", () => {
    it('should return null if no matching id is found', () => {
      const input1 = data;
      const input2 = "nonExistingID";
      const actual = getConcessionByID(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });

    it('should return the correct concession object for an existing id', () => {
      const input1 = data;
      const input2 = "g9sZdG1hI";
      const actual = getConcessionByID(input1, input2);
      const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 }
      expect(actual).toEqual(expected);
    });

    it('should return null if an empty array of concessions', () => {
      const input1 = [];
      const input2 = "someID";
      const actual = getConcessionByID(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });
  });
  describe("calculateTotalFromIDs", () => {
    it('should return 0 for an empty array of IDs', () => {
      const input1 = data;
      const input2 = [];
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    it('should return 0 for an array of non-existing IDs', () => {
      const input1 = data;
      const input2 = ["nonExistingID1", "nonExistingID2"];
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    it('should return the correct total value of all concessions from the array ids', () => {
      const input1 = data;
      const input2 = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"];
      const actual = calculateTotalFromIDs(input1, input2);
      const expected = 3975
      expect(actual).toEqual(expected);
    });
  });
});
