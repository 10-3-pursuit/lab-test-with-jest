/**

 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String} name The name of a ticket
 * @returns The ticket object with a matching name or `null` if no object is found.
 */
function getTicketByName(tickets, name) {
  //if the array is empty return null
  //if the input name does not match the name in the object, return null
  //if the input name matches the name in the object, return the object

  const result = tickets.find((ticket) => {
    return ticket.name.toLowerCase() === name.toLowerCase();
  });

  return result || null;
}

/**
 * Calculates a total based on the given ticket names.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String[]} names An array of ticket names
 * @returns The total value of all tickets from the `names` array.
 */
function calculateTotalFromTicketNames(tickets, names) {
  //if the array is empty, return 0
  //if the input name does not match the name in the object return 0
  //if the input name does match the name in the object, return the total value of all tickets from names array
  let total = 0;
  for (let name of names) {
    const ticket = getTicketByName(tickets, name);
    if (ticket) {
      total += ticket.priceInCents;
    }
  }
  return total;
}

module.exports = { calculateTotalFromTicketNames, getTicketByName };
