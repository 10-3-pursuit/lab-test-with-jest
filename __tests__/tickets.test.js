const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets")
const tickets = require("../data/tickets")


describe("Tickets", ()=>{
  describe('getTicketByName()', ()=>{
    it('should return a ticket object whose name matches the name input', ()=>{
      const input1 = tickets
      const input2 = "Senior Regular"
      const actual = getTicketByName(input1, input2)
      const expected = { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 }
      expect(actual).toEqual(expected)
    })
    it("should return null if tickets array is empty", ()=>{
      const input1 = []
      const input2 = "Senior Regular"
      const actual = getTicketByName(input1, input2)
      const expected = null
      expect(actual).toEqual(expected)
    })
    it("should return null if name string is empty", ()=>{
      const input1 = tickets
      const input2 = ""
      const actual = getTicketByName(input1, input2)
      const expected = null
      expect(actual).toEqual(expected)
    })
    it("should return null if the input name does not match any name key value", ()=>{
      const input1 = tickets
      const input2 = 'ivBeri930'
      const actual = getTicketByName(input1, input2)
      const expected = null
      expect(actual).toEqual(expected)
    })
    it("should return a ticket object regardless of case", ()=>{
      const input1 = tickets
      const input2 = 'senior REGULAR'
      const actual = getTicketByName(input1, input2)
      const expected = { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 }
      expect(actual).toEqual(expected)
    })
  })
  describe("calculateTotalFromTicketNames()", ()=>{
    it("should return the sum of all tickets purchased", ()=>{
      const input1 = tickets
      const input2 = ["Adult Matinee", "Adult Matinee", "Child Matinee","Child Matinee"]
      const actual = calculateTotalFromTicketNames(input1, input2)
      const expected = 3236
      expect(actual).toEqual(expected)
    })
    it("should return 0 if tickets array is empty", ()=>{
      const input1 = []
      const input2 = ["Adult Matinee", "Adult Matinee", "Child Matinee","Child Matinee"]
      const actual = calculateTotalFromTicketNames(input1, input2)
      const expected = 0
      expect(actual).toEqual(expected)
    })
    it("should return 0 if the names array is empty", ()=>{
      const input1 = tickets
      const input2 = []
      const actual = calculateTotalFromTicketNames(input1, input2)
      const expected = 0
      expect(actual).toEqual(expected)
    })
  })
})