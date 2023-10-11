/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) {
  //if the array is empty return null
  //if there is no object found return null
  //if the input ID matches the id in the concession object, return the entire object
  return concessions.find((concession) => concession.id === id) || null;
}

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects
 * @param {String[]} ids An array of unique IDs
 * @returns The total value of all concessions from the `ids` array.
 */
function calculateTotalFromIDs(concessions, ids) {
  let total = 0;
  for (let id of ids) {
    //if the array is empty, return 0
    //if the input id DOES NOT match the id inside of the concessions object, return 0
    //if the input id DOES match the id inside of the concessions object, return the priceInCents
    const concession = getConcessionByID(concessions, id);
    if (concession) {
      total += concession.priceInCents;
    }
  }
  return total;
}

module.exports = {
  getConcessionByID,
  calculateTotalFromIDs,
};
