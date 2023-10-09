// Importing the functions we want to test from tickets.js
const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets.js');

// Importing the sample data from our data folder
const data = require('../data/tickets');

// Main describe block for Tickets
describe("Tickets", () => {
    // Nested describe block for getTicketByName function
    describe("getTicketByName", () => {
        // First test case: should return a ticket with a matching ID
        it("should return a ticket with a matching ID", () => {
            // Define the inputs
            const input1 = data;
            const input2 = "Adult Matinee";
            // Call the function and store the result
            const actual = getTicketByName(input1, input2);
            // Define what we expect the result to be
            const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
            // Check if the actual result matches the expected result
            expect(actual).toEqual(expected);
        });
        // Second test case: should return null if no object is found
        it("should return null if no object is found", () => {
            const input1 = data;
            const input2 = "none";
            const actual = getTicketByName(input1,input2);
            const expected = null;
            expect(actual).toEqual(expected);
        });
    });
    // Nested describe block for calculateTotalFromTicketNames function
    describe("calculateTotalFromTicketNames", () => {
        // First test case: should return the total value of all tickets from the `names` array
        it("total value of all tickets from the `names` array", () => {
            const input1 = data;
            const input2 = ["Child Regular", "Senior Regular"];
            const actual = calculateTotalFromTicketNames(input1,input2);
            const expected = 2288;
            expect(actual).toEqual(expected);
        });
        // Second test case: should return 0 if the array is empty
        it("should return 0 if the array is empty", () => {
            const input1 = data;
            const input2 = [];
            const actual = calculateTotalFromTicketNames(input1,input2);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
        // Third test case: should return 0 if ticket is invalid
        it("should return 0 if ticket is invalid", () => {
            const input1 = data;
            const input2 = ["Season Pass", "Regular Ticket"];
            const actual = calculateTotalFromTicketNames(input1,input2);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
    });
});
