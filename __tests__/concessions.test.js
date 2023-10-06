const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const concessions = require("../data/concessions");

describe("getConcessionById()", () => {
    it("should return null if no object is found", () => {
        const input1 = concessions
        const input2 = "Whatever"
        const actual = getConcessionByID (input1, input2)
        const expected = null
        expect(actual).toEqual(expected)
    })
    it("should return the value that matches the id using .find()", () => {
        const input1 = concessions
        const input2 = "g9sZdG1hI"
        const actual = getConcessionByID (input1, input2)
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 }
        expect(actual).toEqual(expected)
    })
})

describe("calculateTotalFromIDs()", () => {
    it("should return 0 if 'ids' does not exist", () => {
        const input1 = concessions
        const input2 = ["Whatever"]
        const actual = calculateTotalFromIDs (input1, input2)
        const expected = 0
        expect(actual).toEqual(expected)
    })
    it("should return the total value of all concessions from the 'ids' array", () => {
        const input1 = concessions
        const input2 = ["KzWBehRAD", "g9sZdG1hI", "rNVCeVsri"]
        const actual = calculateTotalFromIDs (input1, input2)
        const expected = 2197
        expect(actual).toEqual(expected)
    })
})