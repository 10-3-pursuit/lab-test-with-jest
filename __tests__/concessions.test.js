const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions")
const concessions = require("../data/concessions")

describe("concessions", () => {
    describe("getConcessionById()", () => {
        it("should return the value that matches the id using .find()", () => {
            const input1 = concessions
            const input2 = "g9sZdG1hI"
            const actual = getConcessionByID (input1, input2)
            const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 }
            expect(actual).toEqual(expected)
        })
    })
})