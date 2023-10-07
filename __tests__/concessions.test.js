// Importing fx to test
const {
    getConcessionByID,
    calculateTotalFromIDs
  } = require('../src/concessions');
const importedConcessionsData = require ('../data/concessions.js'); // imported concessions data so test can understand structure of input

// --- T E S T S ---

describe(getConcessionByID, () => { // test suite
  test("returns a concession object by ID.", () => {
    // test code
    const inputArrObj = importedConcessionsData; // array of objects input
    const inputID = "g9sZdG1hI"; // id string that exists in array of objects input
    const actual = getTicketByName(inputArrObj, inputID);
    const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 } // output is object with this structure in this case
    expect(actual).toEqual(expected); // .toEqual for reference types since output expected is an object
  });
  
  test("returns null if no object is found", () => {
    // test code
    const inputArrObj = importedConcessionsData; // array of objects input
    const inputID = "q1w2e3r4r"; // id string that doesn't exist in array of objects input
    const actual = getTicketByName(inputArrObj, inputID);
    expect(actual).toBeNull(); // .toBeNull bc output is expected to be null in this case
  });
});

describe(calculateTotalFromIDs, () => { // test suite
  test("returns the total value of all concessions from the `ids` array", () => {
    // test code
  });

  test("returns numerical value 0 if the ticket id doesn't exist in given array", () => {
    // test code
  });
});