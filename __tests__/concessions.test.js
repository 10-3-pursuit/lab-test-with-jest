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
  });
  
  test("returns null if no object is found", () => {
    // test code
    const inputArrObj = importedConcessionsData; // array of objects input
    const inputID = "q1w2e3r4r"; // id string that doesn't exist in array of objects input
    const actual = getTicketByName(inputArrObj, inputID);
    expect(actual).toBeNull(); // .toBeNull bc output is expected to be null in this case
  });
});