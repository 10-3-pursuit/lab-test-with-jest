const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js")
const tickets = require("../data/tickets.js")

describe("Tickets", ()=>{
    describe("getTicketByName", ()=>{
        it("should return null if no matching ticket name is found", ()=>{
            const input1 = tickets
            const input2 = "Regular"
            const actual = getTicketByName(input1, input2)
            const expected = null
            expect(actual).toEqual(expected)
        })
    })

    describe("getTicketByName", ()=>{
        it("should return the ticket object with the matching ticket name", ()=>{
            const input1 = tickets
            const input2 = "Child Regular"
            const actual = getTicketByName(input1, input2)
            const expected = { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 }
            expect(actual).toEqual(expected)
        })
    })

    describe("getTicketByName", ()=>{
        it("should be case insensitive", ()=>{
            const input1 = tickets
            const input2 = "senior matinee"
            const actual = getTicketByName(input1, input2)
            const expected = { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 }
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromTicketNames", ()=>{
        it("should calculate the total value of all given ticket names", ()=>{
            const input1 = tickets
            const input2 = ["Adult Matinee", "Senior Matinee", "Child Matinee"]
            const actual = calculateTotalFromTicketNames(input1, input2)
            const expected = 2457
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromTicketNames", ()=>{
        it("should return 0 if no ticket object is found", ()=>{
            const input1 = tickets
            const input2 = ["Adult Matinees", "Senior Matinees", "Child Matinees"]
            const actual = calculateTotalFromTicketNames(input1, input2)
            const expected = 0
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromTicketNames", ()=>{
        it("should return 0 if no names provided", ()=>{
            const input1 = tickets
            const input2 = []
            const actual = calculateTotalFromTicketNames(input1, input2)
            const expected = 0
            expect(actual).toEqual(expected)
        })
    })

})