const concessions = require("../data/concessions")
const tickets = require("../data/tickets")


/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */

//concessions is an array of objects, id is unique key made up of letters and numbers
//return first concessions object whose id matches the id input
//return null if no ids match id input
function getConcessionByID(concessions, id) {
  return concessions.find((concession) => concession.id === id) || null;
}

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects
 * @param {String[]} ids An array of unique IDs
 * @returns The total value of all concessions from the `ids` array.
 */

//concessions is an array of objects, ids is an array of unique strings made up of letters and numbers
//create a variable called total and set its value to 0
//loop through the ids array to get individual id
//create a variable called concession and set its value to the function getConcessionByID
//call the function with 2 parameters, concessions and id(a unique string)
//if concession returns a truthy value, add concession.priceInCents to total
//return total
function calculateTotalFromIDs(concessions, ids) {
  let total = 0;
  for (let id of ids) {
    const concession = getConcessionByID(concessions, id);
    if (concession) {
      total += concession.priceInCents;
    }
  }
  return total;
}

module.exports = {
  getConcessionByID,
  calculateTotalFromIDs
}
