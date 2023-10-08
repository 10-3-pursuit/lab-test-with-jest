const {
  getTicketByName,
  calculateTotalFromTicketNames
} = require('../src/tickets'); // imported functions from tickets.js to be tested
const importedTicketData = require ('../data/tickets.js'); // imported ticket data so test can understand structure of input

// --- T E S T S ---

// Creating test structure
// can add another test case so fx can be case insensitive
describe(getTicketByName, () => { // test suite
  test("returns The ticket object with a matching name", () => {
    // test code
    const inputArrObj = importedTicketData; // fx expects array of objects as 1st argument
    const inputTicketName = "Adult Matinee"; // fx expects string as 2nd argument
    const actual = getTicketByName(inputArrObj, inputTicketName);
    const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
    expect(actual).toEqual(expected); // .toEqual instead of .toBe bc output is a reference type
  });

  test("returns `null` if no object with matching ticket name is found", () => {
    // test code
    const inputArrObj = importedTicketData;
    const inputTicketNameStr = "Free";
    const actual = getTicketByName(inputArrObj, inputTicketNameStr);
    expect(actual).toBeNull(); // .toBeNull bc output is expected to be null in this case
  });
});

//extra test case - should return 0 for empty array
describe(calculateTotalFromTicketNames, () => { // test suite
  test("returns correct calculated numerical total value based on the given ticket names.", () => {
    // test code
    const inputArrObj = importedTicketData;
    const inputTicketNamesArr = importedTicketData.map(item => item.name);
    const actual = calculateTotalFromTicketNames(inputArrObj, inputTicketNamesArr);
    expect(actual).toBe(expected); // .toBe because expected value is a primitive type (number)
  });

  test("returns numerical value 0 if the ticket name doesn't exist in given array", () => {
    // test code
    const inputArrObj = importedTicketData;
    const inputTicketNamesArr = ["Nosebleed Seats", "VIP FancyPants Seats", "Free"];
    const actual = calculateTotalFromTicketNames(inputArrObj, inputTicketNamesArr);
    expect(actual).toBe(expected);
  });
});