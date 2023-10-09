const { getTicketByName, calculateTotalFromTicketNames} = require('../src/tickets.js');

const ticketsData = require('../data/tickets');

describe("Tickets", () => {
    describe("getTicketByName", () => {
        it("should return a ticket with a matching ID", () => {
            const input1 = ticketsData
            const input2 = "Adult Matinee"
            const actual = getTicketByName(input1, input2)
            const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 }
            expect(actual).toEqual(expected)
        });
        it("should return null if no object is found", () => {
            const input1 = ticketsData
            const input2 = "none"
            const actual = getTicketByName(input1,input2)
            const expected = null
            expect(actual).toEqual(expected)
        });
    });
    describe("calculateTotalFromTicketNames", () => {
        it("total value of all tickets from the `names` array", () => {
            const input1 = ticketsData
            const input2 = ["Child Regular", "Senior Regular"]
            const actual = calculateTotalFromTicketNames(input1,input2)
            const expected = 2288
            expect(actual).toEqual(expected)
        });
        it("should return 0 if the array is empty", () => {
            const input1 = ticketsData
            const input2 = []
            const actual = calculateTotalFromTicketNames(input1,input2)
            const expected = 0
            expect(actual).toEqual(expected)
        });
        it("should return 0 if ticket is invalid", () => {
            const input1 = ticketsData
            const input2 = ["Season Pass", "Regular Ticket"]
            const actual = calculateTotalFromTicketNames(input1,input2)
            const expected = 0
            expect(actual).toEqual(expected)
        });
    });
});