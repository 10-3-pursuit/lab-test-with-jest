const { getConcessionByID, calculateTotalFromIDs 
} = require('../src/concessions.js');

const concessionsData = require('../data/concessions');

describe("Concessions", () => {
    describe("getConcessionByID", () => {
        it("should return a concession object with a matching ID", () => {
            const input1 = concessionsData
            const input2 = "g9sZdG1hI"
            const actual = getConcessionByID(input1,input2)
            const expected =  { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 }
            expect(actual).toEqual(expected)
        });
        it("should return null if no object is found", () => {
            const input1 = concessionsData
            const input2 = "wrongID"
            const actual = getConcessionByID(input1,input2)
            const expected = null
            expect(actual).toEqual(expected)
        });
    }); 
    describe("calculateTotalFromIDs", () => {
        it("should return the total value of all the concessions from the `id` array", () => {
            const input1 = concessionsData
            const input2 = ["g9sZdG1hI", "NEHAsbTYk", "rNVCeVsri"]
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 2247
            expect(actual).toEqual(expected)
        });
        it("should return 0 if the array is empty", () => {
            const input1 = concessionsData
            const input2 = []
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 0
            expect(actual).toEqual(expected)
        });
        it("should return 0  if concession is invalid", () => {
            const input1 = concessionsData
            const input2 = ["Chocolate Milk", "Iced Coffee"]
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 0
            expect(actual).toEqual(expected)
        });
    })
});



