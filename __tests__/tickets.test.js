const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets');
const tickets = require('../data/tickets');

const names = [];
for (let elt of tickets) {
    names.push(elt.name);
}

describe("Tickets", () => {
    describe("getTicketByName()", () => {
        it("should return null if ticket's name is not found", () => {
            const input1 = tickets;
            const input2 = 'Senior Maiden';
            const actual = getTicketByName(input1, input2);
            const expected = null;
            expect(actual).toEqual(expected);
        });

        it('should return the concession object if the ID is found', () => {
            const input1 = tickets;
            const input2 = 'Senior Matinee'
            const actual = getTicketByName(input1, input2);
            const expected = { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 };
            expect(actual).toEqual(expected);
        });
    })

    describe("calculateTotalFromTicketNames()", () => {
        it('should return 0 if the ticket name is not found', () => {
            const input1 = tickets;
            const input2 = 'Alfa Lopez';
            const actual = calculateTotalFromTicketNames(input1, input2);
            const expected = 0;
            expect(actual).toEqual(expected);
        });

        it('should return 949 cents for the Adult Matinee ticket', () => {
            const input1 = tickets;
            const input2 = ['Adult Matinee'];
            const actual = calculateTotalFromTicketNames(input1, input2);
            const expected = 949;
            expect(actual).toEqual(expected);
        });

        it('it should return 6094 cents for all of the tickets', () => {
            const input1 = tickets;
            const input2 = names;
            const actual = calculateTotalFromTicketNames(input1, input2);
            const expected = 949 + 839 + 669 + 1369 + 1219 + 1069;
            expect(actual).toEqual(expected);
        });
    });
});