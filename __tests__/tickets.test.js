const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets.js");

describe("Tickets", () => {
    describe("getTicketByName()", () => {
        it("should return tickets that have the same name lowercased", () => {
            const input1 = [{ id: "12__3A0", name: "Adult Matinee", priceInCents: 232 }, { id: "32_05_0", name: "Senior Matinee", priceInCents: 123 } ];
            const input2 = "Adult Matinee";
            const actual = getTicketByName(input1, input2);
            const expected = { id: "12__3A0", name: "Adult Matinee", priceInCents: 232 }
            expect(actual).toEqual(expected)
        })

        it("should return null if there are no tickets that have the same name lowercased", () => {
            const input1 = [{ id: "12__3A0", name: "Adult Matinee", priceInCents: 232 }, { id: "32_05_0", name: "Senior Matinee", priceInCents: 123 } ];
            const input2 = "Child Regular";
            const actual = getTicketByName(input1, input2);
            const expected = null
            expect(actual).toEqual(expected)
        })
    })


    describe("calculateTotalFromTicketNames()", () => {
        it("should return total price of tickets with the same name as param", () => {
            const input1 = [{ id: "12__3A0", name: "Adult Matinee", priceInCents: 232 }, { id: "32_05_0", name: "Senior Matinee", priceInCents: 123 } ];
            const input2 = ["Adult Matinee", "Child Regular"];
            const actual = calculateTotalFromTicketNames(input1, input2);
            const expected = 232
            expect(actual).toEqual(expected)
        })

        it("should return 0 if no tickets are found with the same name", () => {
            const input1 = [{ id: "12__3A0", name: "Adult Matinee", priceInCents: 232 }, { id: "32_05_0", name: "Senior Matinee", priceInCents: 123 } ];
            const input2 = ["Senior Regular", "Child Regular"];
            const actual = calculateTotalFromTicketNames(input1, input2);
            const expected = 0
            expect(actual).toEqual(expected)
        })
    })
})