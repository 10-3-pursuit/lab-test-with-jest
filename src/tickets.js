/**
 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String} name The name of a ticket
 * @returns The ticket object with a matching ID or `null` if no object is found.
 */
function getTicketByName(tickets, name) {
  //create a variable called result that finds the ticket with the same name lowercased
  const result = tickets.find((ticket) => {
    return ticket.name.toLowerCase() === name.toLowerCase();
  });
//return result if true, else return null
  return result || null;
}

/**
 * Calculates a total based on the given ticket names.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String[]} names An array of ticket names
 * @returns The total value of all tickets from the `names` array.
 */
function calculateTotalFromTicketNames(tickets, names) {
  //creates an accumulator called total
  let total = 0;
  //iterate through array of names
  for (let name of names) {
    // create variable called ticket that retireves ticket obj that have the same name
    const ticket = getTicketByName(tickets, name);
    //if there are ticket objects, add the priceInCents to the total accumulator
    if (ticket) {
      total += ticket.priceInCents;
    }
  }
  //return accumulator
  return total;
}

module.exports = {getTicketByName, calculateTotalFromTicketNames};