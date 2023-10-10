/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) {
  // searches for a concession with a particular ID and returns null if
  // ID is not found
  return concessions.find((concession) => concession.id === id) || null;
}

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects
 * @param {String[]} ids An array of unique IDs
 * @returns The total value of all concessions from the `ids` array.
 */
function calculateTotalFromIDs(concessions, ids) {
  // initialize a total variable to 0
  let total = 0;

  // loop over the ids array
  for (let id of ids) {
    // get the concession object using an id and a helper function
    const concession = getConcessionByID(concessions, id);

    // if concession is found (truthy)
    if (concession) {
      // add the price in cents to the total
      total += concession.priceInCents;
    }
  }
  return total;
}

module.exports = { getConcessionByID, calculateTotalFromIDs };