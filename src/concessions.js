/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */

function getConcessionByID(concessions, id) {
  //return the concession that had the same id, else return null
  return concessions.find((concession) => concession.id === id) || null;
}

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects
 * @param {String[]} ids An array of unique IDs
 * @returns The total value of all concessions from the `ids` array.
 */
function calculateTotalFromIDs(concessions, ids) {
  //create accumulator variable called total
  let total = 0;
  //iterate through ids array
  for (let id of ids) {
    //create variable that finds concession by id
    const concession = getConcessionByID(concessions, id);
    //if concession exist, add price to accumulator
    if (concession) {
      total += concession.priceInCents;
    }
  }
  //return accumulator
  return total;
}

module.exports = {getConcessionByID, calculateTotalFromIDs};