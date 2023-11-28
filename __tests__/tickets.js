const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets.js")
const tickets = require("../data/tickets.js")


describe("getTicketByName()", () => {
    it("should return an object with a matching name", () => {
        const input1 = tickets;
        const input2 = "Adult Regular";
        const actual = getTicketByName(input1, input2);
        const expected =  { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 };
        expect(actual).toEqual(expected);
    });
    it("should return null if ticket isn't found", () => {
        const input1 = tickets;
        const input2 = "supercalafragilisticexpialadocious";
        const actual = getTicketByName(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});

describe("calculateTotalFromTicketNames()", () => {
    it("should return 0 if all ticket names are incorrect", () => {
        const input1 = tickets;
        const input2 = ['fake','tickets','galore'];
        const actual = calculateTotalFromTicketNames(input1, input2);
        const expected = 0
        expect(actual).toEqual(expected);
    });
    it("should return the sum of all provided ticket names if they're correct", () => {
        const input1 = tickets;
        const input2 = ['Adult Matinee','Child Matinee','Senior Regular'];
        const actual = calculateTotalFromTicketNames(input1, input2);
        const expected = 2837
        expect(actual).toEqual(expected);
    });
});