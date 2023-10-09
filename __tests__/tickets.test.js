const tickets = require("../data/tickets");
const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets");


describe('getTicketByName', () => {
    it('should return  the ticket object that is associated with the given name, if no id is found return null', () => {
        const input = tickets;
        const name = "AdultMatinee"
        const actual = getTicketByName(input, name);
        const expected = "{ id: '6ha0u__54', name: ' AdultMatinee', priceInCents: 949 }"
        
        expect(actual).toEqual(expected);
    })
})


describe('calculateTotalFromTicketNames', () => {
    it('should return the total value of ticket object that is equal to the name given', () => {
        const input = tickets;
        const name = "AdultMatinee";
        const actual = calculateTotalFromTicketNames(input, [name]);
        const expected = 949;

        expect(actual).toEqual(expected);

        const name2 = "NonExistentTicket"; 
        const actual2 = calculateTotalFromTicketNames(input, [name2]);
        const expected2 = 0; 
        expect(actual2).toEqual(expected2);
    })
})
