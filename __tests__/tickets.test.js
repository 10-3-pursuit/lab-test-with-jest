const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const ticketData = require("../data/tickets");

describe("Tickets", () => {
  describe("getTicketByName()", () => {
    it("should return null if the array is empty", () => {
      const input1 = [];
      const input2 = "Senior Matinee";
      const actual = getTicketByName(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });
    it("should return if a matching name is not found", () => {
      const input1 = ticketData;
      const input2 = "Senior Citizen";
      const actual = getTicketByName(input1, input2);
      const expected = null;
      expect(actual).toEqual(expected);
    });
    it("should return the object of the matching input name", () => {
      const input1 = ticketData;
      const input2 = "Senior Matinee";
      const actual = getTicketByName(input1, input2);
      const expected = {
        id: "dlb8ka9N_",
        name: "Senior Matinee",
        priceInCents: 839,
      };
      expect(actual).toEqual(expected);
    });
  });
  describe(calculateTotalFromTicketNames(), () => {
    it("should return 0 if the array is empty", () => {
      const input1 = [];
      const input2 = "Adult Regular";
      const actual = calculateTotalFromTicketNames(input1, input2);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
    it("should return 0 if the input name does not macth the name in the object", () => {
      const input1 = ticketData;
      const input2 = "Regular Adult";
      const actual = calculateTotalFromTicketNames(input1, input2);
      const expected = 0;
      expect(actual).toEqual(expected);
    });
    it("should return the price in cents if the input name matches the name in", () => {
      const input1 = ticketData;
      const input2 = "Adult Regular";
      const actual = calculateTotalFromTicketNames(input1, input2);
      const expected = 1369;
      expect(actual).toEqual(expected);
    });
  });
});
