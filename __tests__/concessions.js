const {getConcessionByID, calculateTotalFromIDs} = require("../src/concessions");
const concessions = require("../data/concessions")



describe("getConcessionByID()", () => {
    it("should return an object with a matching ID", () => {
        const input1 = concessions;
        const input2 = "g9sZdG1hI";
        const actual = getConcessionByID(input1, input2);
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
        expect(actual).toEqual(expected);
    });
    it("should return null if ID isn't found", () => {
        const input1 = concessions;
        const input2 = "supercalafragilisticexpialadocious";
        const actual = getConcessionByID(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});

describe("calculateTotalFromIDs()", () => {
    it("should return 0 if all IDs aren't correct", () => {
        const input1 = concessions;
        const input2 = ['fake','concessions','galore'];
        const actual = calculateTotalFromIDs(input1, input2);
        const expected = 0
        expect(actual).toEqual(expected);
    });
    it("should return the sum of all provided IDs if they're correct", () => {
        const input1 = concessions;
        const input2 = ['g9sZdG1hI','0Qs9Yp2NL','KzWBehRAD'];
        const actual = calculateTotalFromIDs(input1, input2);
        const expected = 2657
        expect(actual).toEqual(expected);
    });
});
