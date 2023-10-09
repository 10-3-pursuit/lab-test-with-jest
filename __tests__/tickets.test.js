const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");
const ticketData = require("../data/tickets");

describe("Tickets", () => {
    describe("getTicketByName()", () => {
      it("Should return the ticket object with a matching name", () => {
        const name = "Adult Matinee"; // Name of the ticket from the ticket data
        const actual = getTicketByName(ticketData, name);
        const expected = {
          id: "6ha0u__54",
          name: "Adult Matinee",
          priceInCents: 949,
        };
        expect(actual).toEqual(expected);
      });
  
      it("Should return null when no matching name is found", () => {
        const name = "Non Existent Ticket"; // A name that doesn't exist in the ticket data
        const actual = getTicketByName(ticketData, name);
        const expected = null;
        expect(actual).toEqual(expected);
      });
  
      it("Should be case-insensitive when matching names", () => {
        const name = "aDulT MaTiNeE"; 
        const actual = getTicketByName(ticketData, name);
        const expected = {
          id: "6ha0u__54",
          name: "Adult Matinee",
          priceInCents: 949,
        };
        expect(actual).toEqual(expected);
      });
    });
  
    describe("calculateTotalFromTicketNames", () => {
      it("Should return the total price of tickets for valid names", () => {
        const names = ["Adult Matinee", "Senior Regular", "Child Regular"]; 
        const actual = calculateTotalFromTicketNames(ticketData, names);
        const expected = 949 + 1219 + 1069; // Total price for the selected tickets
        expect(actual).toEqual(expected);
      });
  
      it("Should return 0 for an empty array of names", () => {
        const names = [];
        const actual = calculateTotalFromTicketNames(ticketData, names);
        const expected = 0;
        expect(actual).toEqual(expected);
      });
  
      it("Should return 0 for names that do not exist in the data", () => {
        const names = ["Non Existent Ticket 1", "Non Existent Ticket 2"];
        const actual = calculateTotalFromTicketNames(ticketData, names);
        const expected = 0;
        expect(actual).toEqual(expected);
      });
    });
  });