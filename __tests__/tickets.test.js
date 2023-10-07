const {
  getTicketByName,
  calculateTotalFromTicketNames
} = require('../src/tickets');

// Creating test structure
describe(getTicketByName, () => { // test suite
  test("returns The ticket object with a matching ID", () => {
    // test code
    const inputArrObj = [
      { id: "1a2b3c", name: "Adult Matinee", priceInCents: 949 },
      { id: "4d5e6f", name: "Child Matinee", priceInCents: 749 },
    ];
    const inputTicketName = "Adult Matinee";
    const actual = getTicketByName(inputArrObj, inputTicketName);
    const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
    expected(actual).toEqual(expected); // .toEqual instead of .toBe bc expects reference type
  });

  test("returns `null` if no object is found", () => {
    // test code
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