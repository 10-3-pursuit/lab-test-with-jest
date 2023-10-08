// Importing the functions to test
const { getConcessionByID, calculateTotalFromIDs } = require('./src/concession.js');

// Sample data to use for testing
const sampleConcessions = [
  { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
  { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
  { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
  { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
  { id: "rNVCeVsri", name: "Candy", priceInCents: 569 }
];

// Testing getConcessionByID function
describe('getConcessionByID', () => {
  // Check if function returns null for an ID that doesn't exist
  test('Check for non-existing ID', () => {
    expect(getConcessionByID(sampleConcessions, 'nonexistentID')).toBeNull();
  });

  // Check if function returns the correct concession for an existing ID
  test('Check for existing ID', () => {
    expect(getConcessionByID(sampleConcessions, 'g9sZdG1hI')).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 });
  });
});

// Testing calculateTotalFromIDs function
describe('calculateTotalFromIDs', () => {
  // Check if function returns 0 when no IDs are given
  test('Check for empty ID array', () => {
    expect(calculateTotalFromIDs(sampleConcessions, [])).toBe(0);
  });

  // Check if function returns the correct total for given IDs
  test('Check for given IDs', () => {
    expect(calculateTotalFromIDs(sampleConcessions, ['g9sZdG1hI', 'KzWBehRAD'])).toBe(1628);
  });
});