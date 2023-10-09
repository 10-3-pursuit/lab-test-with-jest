const { getConcessionByID,calculateTotalFromIDs } = require("../src/concessions");
const concessionsData = require("../data//concessions");

describe("Products", () => {
    describe("getConcessionByID()", () => {
      it("Should return the concession object with the matching ID", () => {
        const id = "KzWBehRAD"; // ID from the concessions data
        const actual = getConcessionByID(concessionsData, id);
        const expected = {
          id: "KzWBehRAD",
          name: "Small Soda",
          priceInCents: 699,
        };
        expect(actual).toEqual(expected);
      });

      it("Should return null when there is no matching ID", () => {
        const id = "invalidID"; // An ID that doesn't exist
        const actual = getConcessionByID(concessionsData, id);
        const expected = null;
        expect(actual).toEqual(expected);
      });
    });

    describe("calculateTotalFromIDs", () => {
        it("Should return the total price of concessions for valid IDs", () => {
          const ids = ["KzWBehRAD", "0Qs9Yp2NL", "rNVCeVsri"]; // IDs for "Small Soda," "Large Popcorn," and "Candy"
          const actual = calculateTotalFromIDs(concessionsData, ids);
          const expected = 699 + 1029 + 569; // Total price 
          expect(actual).toEqual(expected);
        });
      
        it("Should return 0 for an empty array of IDs", () => {
          const ids = [];
          const actual = calculateTotalFromIDs(concessionsData, ids);
          const expected = 0;
          expect(actual).toEqual(expected);
        });
      
        it("Should return 0 for IDs that do not exist in the data", () => {
          const ids = ["invalidID1", "invalidID2"];
          const actual = calculateTotalFromIDs(concessionsData, ids);
          const expected = 0;
          expect(actual).toEqual(expected);
        });
      });
  });

