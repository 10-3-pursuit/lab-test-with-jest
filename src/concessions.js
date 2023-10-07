/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) { // fx is defined with 2 parameters
   // .find is invoked on concessions array to find and return first element in concessions array that matches id input
   // if it doesn't it it'll return null
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
    const concession = getConcessionByID(concessions, id);
    if (concession) {
      total += concession.priceInCents;
    }
  }
  return total;
}
