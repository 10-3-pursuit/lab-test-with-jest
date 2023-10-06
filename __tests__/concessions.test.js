const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const concessions = require('../data/concessions')

describe("Concessions", () => {
    describe("getConcessionByID()", () => {
        it("should return null if the ID is not found", () => {
            const input1 = concessions;
            const input2 = 'g9sZdG1hJ'
            const actual = getConcessionByID(input1, input2);
            const expected = null;
            expect(actual).toEqual(expected);
        });

        it('should return the concession object is the ID is found', () => {
            const input1 = concessions;
            const input2 = 'g9sZdG1hI'
            const actual = getConcessionByID(input1, input2);
            const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
            expect(actual).toEqual(expected);
        });
    })

    describe("calculateTotalFromIDs()", () => {
        it('should return "No products purchased." if the array is empty', () => {
            const input = {purchased:[]};
            const actual = getProductsPurchased(input);
            const expected = "No products purchased."
            expect(actual).toEqual(expected);
        });

        // it('should return one product name if the array has one element', () => {
        //     const input = {purchased : [
        //         { name: 'Chobani Yogurt'}
        //     ]};
        //     const actual = getProductsPurchased(input);
        //     const expected = 'Chobani Yogurt'.toString();
        //     expect(actual).toEqual(expected);
        // });

        // it('should return an array of names if the array has multiple elements', () => {
        //     const input = {purchased : [
        //         { name: 'Chobani Yogurt'},
        //         { name: 'Cocoa Puffs' },
        //         { name: 'Tropicana Orange Juice' }
        //     ]};
        //     const actual = getProductsPurchased(input);
        //     const expected = ['Chobani Yogurt', 'Cocoa Puffs', 'Tropicana Orange Juice'];
        //     expect(actual).toEqual(expected);
        // });
    });
});