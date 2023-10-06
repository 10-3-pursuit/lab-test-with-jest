const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets');
const tickets = require('../data/tickets');

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

    // describe("calculateTotalFromTicketNames()", () => {
    //     it('should return a total of 929 cents with the id of g9sZdG1hI', () => {
    //         const input1 = concessions;
    //         const input2 = ['g9sZdG1hI'];
    //         const actual = calculateTotalFromTicketNames(input1, input2);
    //         const expected = 929;
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should return a total of 1958 cents with the first two ids', () => {
    //         const input1 = concessions;
    //         const input2 = ['g9sZdG1hI', '0Qs9Yp2NL'];
    //         const actual = calculateTotalFromTicketNames(input1, input2);
    //         const expected = 929 + 1029;
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should return a total of 3975 cents with the id of g9sZdG1hI', () => {
    //         const input1 = concessions;
    //         const input2 = ids;
    //         const actual = calculateTotalFromTicketNames(input1, input2);
    //         const expected = 929 + 1029 + 569 + 749 + 699;
    //         expect(actual).toEqual(expected);
    //     });
    // });
});