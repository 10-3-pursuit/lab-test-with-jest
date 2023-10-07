//const concessionsArr = require('./data/concessions.js');
//const testString = require('./data/test.js');
const testString = require('../data/test.js');
console.log(testString);

/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects.
 * @param {String} id A unique ID for a specific concession.
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) { // fx is defined with 2 parameters
   // .find is invoked on concessions array to find and return first element (concessions object) in concessions array that matches id input
   // if it doesn't it it'll return null
  return concessions.find((concession) => concession.id === id) || null;
};
//console.log (getConcessionByID(concessionsArr, "g9sZdG1hI"));

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
    const concession = getConcessionByID(concessions, id); // value of concession = fx getConcessionByID that returns concession object with a matching ID or `null` if no object is found
    if (concession) { 
      // if callback doesn't evaluate to null (concession object with matching ID exists) then it adds value in property priceInCents to total
      total += concession.priceInCents;
    }
  }
  return total; // returns sum of the total values (prices) of concession object with ids in ids array 
};

console.log ('hi')

module.exports = {
  getConcessionByID,
  calculateTotalFromIDs
};