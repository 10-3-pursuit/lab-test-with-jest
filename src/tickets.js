/**
 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String} name The name of a ticket
 * @returns The ticket object with a matching ID or `null` if no object is found.
 */

//tickets is an array of ticket objects
//name is a string and the name of a ticket
//created a varaible called result
//value of result is a ticket object that matches the name parameter
//made sure ticket name and name parameter can match regardless of case
//return ticket object the matches name parameter
//return null if name parameter does not match a ticket name
function getTicketByName(tickets, name) {
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

//tickets is an array of ticket objects
//names is an array of ticket names
//created a variable named total and set value to 0
//used a loop to iterate through the names array
//created a variable named ticket to hold the getTicketByName function
//called the getTicketByName function with the tickets array and a string name as the arguments
//if ticket exists, add the ticket's price in cents to total
//return total amount for all tickets purchased
function calculateTotalFromTicketNames(tickets, names) {
  let total = 0;
  for (let name of names) {
    const ticket = getTicketByName(tickets, name);
    if (ticket) {
      total += ticket.priceInCents;
    }
  }
  return total;
}

module.exports = {
  getTicketByName,
  calculateTotalFromTicketNames
}