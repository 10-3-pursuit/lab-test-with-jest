const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const data = require("../data/concessions");

describe("Concessions", () => {
    describe("getConcessionByID()",() => {
        it("should return a concession object with a matching ID", () => {
            // This is actual data that represents the arguments
            const input1 = data;

            const input2 = "g9sZdG1hI";

            // Call the function with actual data
            const actual = getConcessionByID(input1, input2);

            // Output you expect
            const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };

            expect(actual).toEqual(expected);
        });
        
        it("should return null if no object is found", () =>{
            const input1 = data;
            const input2 = "unknown";

            const actual = getConcessionByID(input1, input2);

            const expected = null;

            expect(actual).toEqual(expected);
        });
    });
    describe("calculateTotalFromIDs()",() => {
        it("should return the total value of all concessions from the ids array", () => {
            const input1 = data;
            const input2 = ['g9sZdG1hI', '0Qs9Yp2NL', 'KzWBehRAD', 'NEHAsbTYk', 'rNVCeVsri'];

            const actual = calculateTotalFromIDs(input1, input2);
            const expected = 3975;

            expect(actual).toEqual(expected);
        });
        it("should return 0 if the array of concession objects is empty", () => {
            const input1 = data;
            const input2 = [];

            const actual = calculateTotalFromIDs(input1, input2);

            const expected = 0;
            expect(actual).toEqual(expected);
        })
    });
});