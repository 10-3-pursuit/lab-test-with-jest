/**
 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects.
 * @param {String} name The name of a ticket.
 * @returns The ticket object with a matching ID or `null` if no object is found.
 */
function getTicketByName(tickets, name) { // fx is defined with 2 parameters
  const result = tickets.find((ticket) => { // .find() method returns first element in tickets array that satisfies condition in next line (like using {break}; in a loop with an if statement)
    return ticket.name.toLowerCase() === name.toLowerCase(); // .find() tests each ticket in tickets array by checking if name property of the ticket (converted to lowercase) matches the provided name argument (also converted to lowercase). .toLowerCase() makes sure search is case insensitive
  });

  return result || null; // returns null if no ticket that matches criteria is found (when callback returns undefined which is still truthy so || can work and return null), or the result if callback fx returns an element from array
};

/**
 * Calculates a total based on the given ticket names.
 * @param {Object[]} tickets An array of ticket objects.
 * @param {String[]} names An array of ticket names.
 * @returns The total value of all tickets from the `names` array.
 */
function calculateTotalFromTicketNames(tickets, names) { // fx is defined with 2 parameters
  let total = 0; // Initializing variable total with value 0. Stores cumulative price of the tickets whose names are provided in the names array
  for (let name of names) { // Iterates through each name in names array
     // stores value of previous fx in tickets variable to use as as a callback function
    const ticket = getTicketByName(tickets, name); // value of ticket = fx getTicketByName that returns ticket object with a matching ID or `null` if no object is found
    if (ticket) {
      total += ticket.priceInCents; // if callback doesn't evaluate to null  (ticket with name exists) then it adds value in property priceInCents to total
    }
  }
  return total; // returns sum of the total values (prices) of tickets with names in names array 
};
