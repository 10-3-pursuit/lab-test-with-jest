const {getConcessionByID, calculateTotalFromIDs} = require('../src/concessions');
const concessionsData = require('../data/concessions');

describe("Concessions", () =>{
    describe("getConcessionByID()",()=>{
        it("should return a concession Object from the given concessions array that matches the given ID",() =>{
            const data = concessionsData;
            const id = "KzWBehRAD";
            const actual = getConcessionByID(data,id);
            const expected = { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 };
            expect(actual).toEqual(expected)
        });

        it("should return null if the concession cannot be found", () =>{
            const data = concessionsData;
            const id = "incorrect-id";
            const actual = getConcessionByID(data,id);
            const expected = null;
            expect(actual).toEqual(expected);
        });
    });

    describe("calculateTotalFromIDs()",() =>{
        it("should return a number that is the total price of all the concessions given by ID in cents",() =>{
            const data = concessionsData;
            const ids = ["KzWBehRAD","0Qs9Yp2NL","g9sZdG1hI"];
            const actual = calculateTotalFromIDs(data,ids);
            const expected = 2657;
            expect(actual).toEqual(expected);
        });

        it("should not add onto price if no concession can be found for a given id",() => {
            const data = concessionsData;
            const ids = ["KzWBehRAD","0Qs9Yp2NL","g9sZdG1hI","incorrect-id"];
            const actual = calculateTotalFromIDs(data,ids);
            const expected = 2657;
            expect(actual).toEqual(expected);
        });

        it("should return a total of number 0 if no concessions were purchased",() => {
            const data = concessionsData;
            const ids = [];
            const actual = calculateTotalFromIDs(data,ids);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
    });
});