const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");

describe("Concessions", () => {
    describe("getConcessionById", () => {
        it("should return concession with the same id", () => {
            const input1 = [{id: 12345, name: "Hotdogs"}, {id:56789, name: "Burger"}];
            const input2 = 12345
            const actual = getConcessionByID(input1, input2 );
            const expected = {id:12345, name: "Hotdogs"};
            expect(actual).toEqual(expected);
        })

        it("should return null if no concessions have the same id", () => {
            const input1 = [{id: 12345, name: "Hotdogs", priceInCents: 100}, {id:56789, name: "Burger", priceInCents: 100}];
            const input2 = 10293;
            const actual = getConcessionByID(input1, input2);
            const expected = null
            expect(actual).toEqual(expected);
        })
    })


    describe("calculateTotalFromIDs()", ()  => {
        it("should return a number of the total price of concessions", () => {
            const input1 = [{id: 12345, name: "Hotdogs", priceInCents: 100}, {id:56789, name: "Burger", priceInCents: 100}];
            const input2 = [12345, 56789, 32143, 54675]
            const actual = calculateTotalFromIDs(input1, input2);
            const expected = 200;
            expect(actual).toEqual(expected);
        })

        it("should return 0 if there are no concessions with a corresponding ids ", () => {
            const input1 = [{id: 12345, name: "Hotdogs", priceInCents: 100}, {id:56789, name: "Burger", priceInCents: 100}];
            const input2 = [69122, 55555, 64736, 97867];
            const actual = calculateTotalFromIDs(input1, input2);
            const expected = 0;
            expect(actual).toEqual(expected);
        })
    })
})

