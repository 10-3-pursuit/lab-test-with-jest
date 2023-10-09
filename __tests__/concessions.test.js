const data = require("../data/concessions");
const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions")

describe('getConcessionByID', () => {
    it('should return the concession object associated with the given id, if id cannot be found return null', () =>{
        const input = data;
        const actual = getConcessionByID(input)
        const expected =  { id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929 }
        
        expect(actual).toEqual(expected);
    });
});



describe('calculateTotalFromIDs', () => {
    it('should return the total value of all concessions within the ids array', () =>{
        const input = data;
        const ids =[ 
        "g9sZdG1hI",
        ]
        const actual = calculateTotalFromIDs(input, ids);
        const expected = 929;

        expect(actual).toEqual(expected)
    })
})