const tickets = require("../data/tickets");

const { getTicketByName,
    calculateTotalFromTicketNames } = require("../src/tickets");

// test for getTicketBYName()
describe("getTicketByName()", () => {
    it('should return the ticket object with a matching ID', () => {
        const input1 = tickets; 
        const input2 = "Senior Regular";
        const actual = getTicketByName(input1, input2);
        const expected = { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 };
        expect(actual).toEqual(expected);
    }); 
    it('should return null if `` array is empty' , () => {
        const input1 = tickets; 
        const input2 = '';
        const actual = getTicketByName(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    }); 
}); 

//test for calculateTotalFromTicketNames()
describe("calculateTotalFromTicketNames()", () => {
    it('should return the total value of all tickets from the `names` array', () => {
        const input1 = tickets; 
        const input2 = [ "Adult Matinee", "Senior Regular", "Child Regular" ];
        const actual = calculateTotalFromTicketNames(input1, input2);
        const expected = 3237;
        expect(actual).toEqual(expected);
    }); 
    it('should return null if `` array is empty' , () => {
        const input1 = tickets; 
        const input2 = [];
        const actual = calculateTotalFromTicketNames(input1, input2);
        const expected = 0;
        expect(actual).toEqual(expected);
    }); 
}); 