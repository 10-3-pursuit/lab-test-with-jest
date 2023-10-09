const concessions = require("../data/concessions");
const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions"); 


//test for getConcessionByID()
describe("getConcessionByID()", () => {
    it('should return the correct concession object that matches ID string', () => {
        const input1 = concessions; 
        const input2 = "g9sZdG1hI";
        const actual = getConcessionByID(input1, input2);
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
        expect(actual).toEqual(expected);
    }); 
    it('should return null if no matching ID is found', () => {
        const input1 = concessions; 
        const input2 = "incorrect ID";
        const actual = getConcessionByID(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    }); 
}); 

//test for calculateTotalFromIDs()
describe("calculateTotalFromIDs()", () => {
    it('should return total value of all concessions from the `ids` array', () => {
        const input1 = concessions; 
        const input2 = [ "0Qs9Yp2NL", "NEHAsbTYk", "rNVCeVsri" ];
        const actual = calculateTotalFromIDs(input1, input2);
        const expected = 2347;
        expect(actual).toEqual(expected);
    }); 
    it('should return null if `ids` array is empty' , () => {
        const input1 = concessions; 
        const input2 = [];
        const actual = getConcessionByID(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    }); 
});  