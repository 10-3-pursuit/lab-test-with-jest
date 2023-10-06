const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets");
const ticketsData = require("../data/tickets");

describe("Tickets",() =>{
    describe("getTicketByName()", () =>{
        it("should return a ticket object that matches the given ticket name", () =>{
            const data = ticketsData;
            const name = "Senior Matinee";
            const actual = getTicketByName(data,name);
            const expected = { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 };
            expect(actual).toEqual(expected);
        });

        it("should be case sensitive",() =>{
            const data = ticketsData;
            const name = "sENIOR ReguLAR";
            const actual = getTicketByName(data,name);
            const expected = { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 };
            expect(actual).toEqual(expected);
        });

        it("should return null if a ticket cannot be matched to the given name", () =>{
            const data = ticketsData;
            const name = "incorrect-name";
            const actual = getTicketByName(data,name);
            const expected = null;
            expect(actual).toEqual(expected);
        })
    });

    describe("calculateTotalFromTicketNames",()=>{
        it("should return a number that is the total cost of all tickets that match the given names",() =>{
            const data = ticketsData;
            const names = ["Child Matinee","Adult Regular","Senior Matinee"];
            const actual = calculateTotalFromTicketNames(data,names);
            const expected = 2877;
            expect(actual).toEqual(expected);
        });

        it("should be case sensitive",()=>{
            const data = ticketsData;
            const names = ["child matinee","ADULT REGULAR","seNIOR MatiNEe"];
            const actual = calculateTotalFromTicketNames(data,names);
            const expected = 2877;
            expect(actual).toEqual(expected);
        });

        it("should not add onto the total if a ticket cannot be found for a given ticket name", () =>{
            const data = ticketsData;
            const names = ["Child Matinee","Adult Reg","Senior Mat"];
            const actual = calculateTotalFromTicketNames(data,names);
            const expected = 669;
            expect(actual).toEqual(expected);
        });

        it("should return the number 0 if no names are given",() =>{
            const data = ticketsData;
            const names = [];
            const actual = calculateTotalFromTicketNames(data,names);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
    });
});