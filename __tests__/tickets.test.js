const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js"); 
const data = require("../data/tickets.js"); 

describe("Tickets", () => {
  describe("getTicketByName", () => {
    it('should return null if no matching name is found', () => {
      const input1 = data;
      const input2 = "Non-existing Ticket";
      const actual = getTicketByName(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });

    it('should return the correct ticket object for an existing name', () => {
      const input1 = data;
      const input2 = "Adult Matinee";
      const actual = getTicketByName(input1, input2);
      const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 }
      expect(actual).toEqual(expected);
    });
  });

  describe("calculateTotalFromTicketNames", () => {
     it('should return 0 for an array of non-existing names', () => {
      const input1 = data;
      const input2 = ["Non-existing Ticket 1", "Non-existing Ticket 2"];
      const actual = calculateTotalFromTicketNames(input1, input2);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    it('should return the correct total value for an array of existing ticket names', () => {
      const input1 = data;
      const input2 = ["Adult Matinee", "Senior Matinee", "Child Matinee",]
      const actual = calculateTotalFromTicketNames(input1, input2);
      const expected = 2457
      expect(actual).toEqual(expected);
    });
  });
});
