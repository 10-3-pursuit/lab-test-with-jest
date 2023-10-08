const concessionsArrObj = require ('../data/concessions.js'); // to import data from data files
// Path Correction: Based on directory structure, require statement should have .. instead of . to move up one directory level from src to root of project then data
//console.log (concessionsArr); // to test if import of data file was success

/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects.
 * @param {String} id A unique ID for a specific concession.
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) { // fx is defined with 2 parameters
   // .find is invoked on concessions array to find and return first element (concessions object) in concessions array that matches id input
   // if it doesn't it it'll return null
  return concessions.find((concession) => concession.id === id) || null; // seems to work as intended
};
// --- Manually Test ---
//console.log (getConcessionByID(concessionsArrObj, "g9sZdG1hI")); // tests if function returns something (should be a concession object)
//console.log (getConcessionByID(concessionsArrObj, "q1w2e3r4r")); // should return null

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects.
 * @param {String[]} ids An array of unique IDs.
 * @returns The total value of all concessions from the `ids` array.
 */
function calculateTotalFromIDs(concessions, ids) { // fx is defined with 2 parameters
  let total = 0; // initialized total with value of 0 (to accumualte total cost after iteration)
  for (let id of ids) { // iterates over each id in ids array
    // stores value of previous fx in concessions variable to use as as a callback function
    const concession = getConcessionByID(concessions, id); // value of concession = fx getConcessionByID that returns concession object with a matching IDs or `null` if no object is found
    if (concession) { 
      // if callback doesn't evaluate to null (concession object with matching ID exists) then it adds value in property priceInCents to total
      total += concession.priceInCents;
    }
  }
  return total; // returns sum of the total values (prices) of concession object with ids in ids array. Seems to work as intended
};
// --- Manually Test ---
// Enable variable in next line to use the following manual tests
let ids = concessionsArrObj.map(item => item.id); // an array of ids extracted from concessionArrObj to test function
//console.log (calculateTotalFromIDs(concessionsArrObj, ids)); // should return sum which is 3975
//console.log (calculateTotalFromIDs(concessionsArrObj, ["g9sZdG1hI","q1w2e3r4r"])); // should return number value 929
//console.log (calculateTotalFromIDs(concessionsArrObj, ["q1w2e3r4r"])); // should return 0
//console.log (calculateTotalFromIDs([], ids)); // should return 0


// to export functions to test files
module.exports = {
  getConcessionByID,
  calculateTotalFromIDs
};