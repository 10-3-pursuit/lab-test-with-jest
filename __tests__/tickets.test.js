const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");

const tickets = require("../data/tickets");

describe("Tickets", () => {
    describe("getTicketByName()", () =>{
        it("should return the ticket object that matches with the ticket name", () => {
            const input1 = tickets;
            const input2 = "Adult Regular";

            const actual = getTicketByName(input1, input2);

            const expected = { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 };

            expect(actual).toEqual(expected);
        });
        it("should return null if no ticket is found", () => {
            const input1 = tickets;
            const input2 = "Adult";

            const actual = getTicketByName(input1, input2);

            const expected = null;
            expect(actual).toEqual(expected);
        })
    });
    describe("calculateTotalFromTicketNames()", () => {
        it("should return the total value of all tickets from the array of names", () => {
            const input1 = tickets;
            const input2 = ['Adult Matinee', 'Senior Matinee', 'Child Matinee', 'Adult Regular', 'Senior Regular', 'Child Regular'];

            const actual = calculateTotalFromTicketNames(input1, input2);

            const expected = 6114;

            expect(actual).toEqual(expected);
        })
        it("should return 0 if no there are no ticket objects", () =>{
            const input1 = tickets;
            const input2 = [];

            const actual = calculateTotalFromTicketNames(input1, input2);

            const expected = 0;
            expect(actual).toEqual(expected);
        })
    })
    
});