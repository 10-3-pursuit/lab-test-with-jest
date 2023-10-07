const {
  getTicketByName,
  calculateTotalFromTicketNames
} = require('../src/tickets'); // imported functions from tickets.js to be tested

const importedTicketData = require ('../data/tickets.js'); // imported ticket data so test can understand structure of input

// Creating test structure
describe(getTicketByName, () => { // test suite
  test("returns The ticket object with a matching name", () => {
    // test code
    const inputArrObj = importedTicketData;
    const inputTicketName = "Adult Matinee";
    const actual = getTicketByName(inputArrObj, inputTicketName);
    const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
    expect(actual).toEqual(expected); // .toEqual instead of .toBe bc expects reference type
  });

  test("returns `null` if no object with matching ticket name is found", () => {
    // test code
    const inputArrObj = importedTicketData;
    const inputTicketName = "Free";
    const actual = getTicketByName(inputArrObj, inputTicketName);
    expect(actual).toBeNull(); // .toEqual instead of .toBe bc expects reference type
  });
});

describe(calculateTotalFromTicketNames, () => { // test suite
  test("returns calculated total based on the given ticket names.", () => {
    // test code
  });

  test("returns numerical value 0 if the ticket name doesn't exist in given array", () => {
    // test code
  });
});