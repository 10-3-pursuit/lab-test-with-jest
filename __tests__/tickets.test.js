const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");
const tickets = require("../data/tickets");

describe("getTicketByName()", () => {
    it("should return null if no object is found", () => {
        const input1 = tickets
        const input2 = "Whatever"
        const actual = getTicketByName (input1, input2)
        const expected = null
        expect(actual).toEqual(expected)
    })
    it("should return the value that matches the id using .find()", () => {
        const input1 = tickets
        const input2 = "Adult Matinee"
        const actual = getTicketByName (input1, input2)
        const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 }
        expect(actual).toEqual(expected)
    })
})

describe("calculateTotalFromTicketNames()", () => {
    it("should return 0 if 'name' does not exist", () => {
        const input1 = tickets
        const input2 = ["Whatever"]
        const actual = calculateTotalFromTicketNames (input1, input2)
        const expected = 0
        expect(actual).toEqual(expected)
    })
    it("should return the total value of all concessions from the 'names' array", () => {
        const input1 = tickets
        const input2 = ["Adult Matinee", "Senior Matinee", "Child Matinee"]
        const actual = calculateTotalFromTicketNames (input1, input2)
        const expected = 2457
        expect(actual).toEqual(expected)
    })
})