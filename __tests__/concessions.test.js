// Importing fx to test
const {
    getConcessionByID,
    calculateTotalFromIDs
  } = require('../src/concessions');

// Creating test structure
describe("getTicketByName", () => { // test suite
  test("returns The ticket object with a matching ID", () => {
    // test code
  });

  test("returns `null` if no object is found", () => {
    // test code
  });
});

describe("calculateTotalFromTicketNames", () => { // test suite
  test("returns calculated total based on the given ticket names.", () => {
    // test code
  });

  test("returns numerical value 0 if the ticket name doesn't exist in given array", () => {
    // test code
  });
});