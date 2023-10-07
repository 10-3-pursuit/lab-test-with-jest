const {
  getTicketByName,
  calculateTotalFromTicketNames
} = require('../src/tickets');

// Creating test structure
describe(getTicketByName, () => { // test suite
  test("returns The ticket object with a matching ID", () => {
    // test code
    const inputArrObj = [
      { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
      { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
      { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
      { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
      { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
      { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ];
    const inputTicketName = "Adult Matinee";
    const actual = getTicketByName(inputArrObj, inputTicketName);
    const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
    expect(actual).toEqual(expected); // .toEqual instead of .toBe bc expects reference type
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