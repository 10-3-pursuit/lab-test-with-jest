const {getConcessionByID, calculateTotalFromID, calculateTotalFromIDs} = require("../src/concessions")
const concessions = require("../data/concessions")

describe("Concessions", () => {
    describe("getConcessionByID", () => {
        it("should return null if the ID is not present", () => {
            const input1 = concessions
            const input2 = 'something'
            const actual =  getConcessionByID(input1, input2)
            const expected = null
            expect(actual).toEqual(expected)
        })
    })
    describe("getConcessionByID", ()=> {
        it("should return the matching ID from the object", () => {
            const input1 = concessions
            const input2 = "0Qs9Yp2NL"
            const actual = getConcessionByID (input1, input2)
            const expected = { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 }
            expect(actual).toEqual(expected)
        })
    })
    describe("calculateTotalFromIDs", ()=> {
        it("should return total when given multiple IDs", () => {
            const input1 = concessions
            const input2 = ["0Qs9Yp2NL", "g9sZdG1hI"]
            const actual = calculateTotalFromIDs (input1, input2)
            const expected = 1958
            expect(actual).toEqual(expected)
        })
    })
    describe("calculateTotalFromIDs", ()=> {
        it("should return 0 when given an empty array", () => {
            const input1 = concessions
            const input2 = []
            const actual = calculateTotalFromIDs (input1, input2)
            const expected = 0
            expect(actual).toEqual(expected)
        })
    })
})

