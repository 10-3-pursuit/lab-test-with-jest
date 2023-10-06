const {getTicketByName, calculateTotalFromTicketNames} = require('../src/tickets')
const tickets = require("../data/tickets")

describe("Tickets", () => {
    describe("getTicketByName", ()=> {
        it("should work regardless of letter case", () => {
            const input1 = tickets 
            const input2 = "AduLT MATINEE"
            const actual = getTicketByName(input1, input2)
            const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 }
            expect(actual).toEqual(expected)
        })
    })
    describe("getTicketByName", ()=> {
        it("should return null if name is not in object", () => {
            const input1 = tickets
            const input2 = "yadayada"
            const actual = getTicketByName(input1, input2)
            const expected = null
            expect(actual).toEqual(expected)
        })
    })
    describe("calculateTotalFromTicketNames", ()=> {
        it("should return total price when given multiple tickets", () => {
            const input1 = tickets
            const input2 = ["Adult matinee", "Adult matinee"]
            const actual = calculateTotalFromTicketNames(input1, input2)
            const expected = 1898
            expect(actual).toEqual(expected)
        })
    })
    describe("calculateTotalFromTicketNames", ()=> {
        it("should skip invalid ticket name, and return the currect total", () => {
            const input1 = tickets
            const input2 = ["Scary movie", "Adult Matinee"]
            const actual =calculateTotalFromTicketNames(input1, input2)
            const expected = 949
            expect(actual).toEqual(expected)
        })
    })
})