const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const concessions = require('../data/concessions');

const ids = [];
for (let conc of concessions) {
    ids.push(conc.id);
}

describe("Concessions", () => {
    describe("getConcessionByID()", () => {
        it("should return null if the ID is not found", () => {
            const input1 = concessions;
            const input2 = 'g9sZdG1hJ'
            const actual = getConcessionByID(input1, input2);
            const expected = null;
            expect(actual).toEqual(expected);
        });

        it('should return the concession object if the ID is found', () => {
            const input1 = concessions;
            const input2 = 'g9sZdG1hI'
            const actual = getConcessionByID(input1, input2);
            const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
            expect(actual).toEqual(expected);
        });
    })

    describe("calculateTotalFromIDs()", () => {
        it('should return a total of 929 cents with the id of g9sZdG1hI', () => {
            const input1 = concessions;
            const input2 = ['g9sZdG1hI'];
            const actual = calculateTotalFromIDs(input1, input2);
            const expected = 929;
            expect(actual).toEqual(expected);
        });

        it('should return a total of 1958 cents with the first two ids', () => {
            const input1 = concessions;
            const input2 = ['g9sZdG1hI', '0Qs9Yp2NL'];
            const actual = calculateTotalFromIDs(input1, input2);
            const expected = 929 + 1029;
            expect(actual).toEqual(expected);
        });

        // it('should return a total of 929 cents with the id of g9sZdG1hI', () => {
        //     const input1 = concessions;
        //     const input2 = ['g9sZdG1hI'];
        //     const actual = calculateTotalFromIDs(input1, input2);
        //     const expected = 929;
        //     expect(actual).toEqual(expected);
        // });
    });
});