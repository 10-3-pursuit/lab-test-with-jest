const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js")
const concessions = require("../data/concessions.js")

describe("Concessions", ()=>{
    describe("getConcessionByID", ()=>{
        it("should return null if no matching ID object is found", ()=>{
            const input1 = concessions
            const input2 = "5hlou__54"
            const actual = getConcessionByID(input1, input2)
            const expected = null
            expect(actual).toEqual(expected)
        })
    })

    describe("getConcessionByID", ()=>{
        it("should return concession object with the matching ID", ()=>{
            const input1 = concessions
            const input2 = "0Qs9Yp2NL"
            const actual = getConcessionByID(input1, input2)
            const expected = { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 }
            expect(actual).toEqual(expected)
        })
    })

    describe("getConcessionByID", ()=>{
        it("should return null if concession array is empty", ()=>{
            const input1 = []
            const input2 = "0Qs9Yp2NL"
            const actual = getConcessionByID(input1, input2)
            const expected = null
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromIDs", ()=>{
        it("should return the total value of all concessions from the array of given ids", ()=>{
            const input1 = concessions
            const input2 = ["g9sZdG1hI", "0Qs9Yp2NL", "rNVCeVsri"]
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 2527
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromIDs", ()=>{
        it("should return 0 when given an empty array", ()=>{
            const input1 = concessions
            const input2 = []
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 0
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromIDs", ()=>{
        it("should return a total when given a single id in an array", ()=>{
            const input1 = concessions
            const input2 = ["KzWBehRAD"]
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 699
            expect(actual).toEqual(expected)
        })
    })

    describe("calculateTotalFromIDs", ()=>{
        it("should return the total even when given a non-matching id in an array", ()=>{
            const input1 = concessions
            const input2 = ["KzWBehaeD", "rNVCeVsri", "NEHAsbTYk", "WAHAsb0Yk"]
            const actual = calculateTotalFromIDs(input1,input2)
            const expected = 1318
            expect(actual).toEqual(expected)
        })
    })
})