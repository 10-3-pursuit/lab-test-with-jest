const {getConcessionByID, calculateTotalFromIDs} = require("../src/concessions")
const concessions = require("../data/concessions")


describe("Concessions", ()=>{
  describe('getConcessionByID()', ()=>{
    it('should return an object whose id key value matches the input id', ()=>{
      const input1 = concessions
      const input2 = '0Qs9Yp2NL'
      const actual = getConcessionByID(input1, input2)
      const expected = { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 }
      expect(actual).toEqual(expected)
    })
    it("should return null if concessions array is empty", ()=>{
      const input1 = []
      const input2 = ["0Qs9Yp2NL"]
      const actual = getConcessionByID(input1, input2)
      const expected = null
      expect(actual).toEqual(expected)
    })
    it("should return null if the input id does not match any id key value", ()=>{
      const input1 = concessions 
      const input2 = 'ivBeri930'
      const actual = getConcessionByID(input1, input2)
      const expected = null
      expect(actual).toEqual(expected)
    })
  })
  describe("calculateTotalFromIDs()", ()=>{
    it("should return the sum of all concessions purchased", ()=>{
      const input1 = concessions
      const input2 = ["0Qs9Yp2NL", "NEHAsbTYk", "rNVCeVsri"]
      const actual = calculateTotalFromIDs(input1, input2)
      const expected = 2347
      expect(actual).toEqual(expected)
    })
    it("should return 0 if concessions array is empty", ()=>{
      const input1 = []
      const input2 = ["0Qs9Yp2NL", "NEHAsbTYk", "rNVCeVsri"]
      const actual = calculateTotalFromIDs(input1, input2)
      const expected = 0
      expect(actual).toEqual(expected)
    })
    it("should return 0 if ids array is empty", ()=>{
      const input1 = concessions
      const input2 = []
      const actual = calculateTotalFromIDs(input1, input2)
      const expected = 0
      expect(actual).toEqual(expected)
    })
  })
})