const { getConcessionByID, calculateTotalFromIDs } = require('.data/concessions');

test('returns the concession object by ID', ()=>{
    const concessions = [
    { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
    { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
    { id: "rNVCeVsri", name: "Candy", priceInCents: 569 }
]
const result = getConcessionByID(concessions, "0Qs9Yp2NL") 
})

test('Calculates total value of concessions', ()=>{
    const concessions1 = [
        { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
        { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
        { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
        { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
        { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
      ];
      const ids = ["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD","NEHAsbTYk","rNVCeVsri"]
      const result1 = getConcessionByID(concessions1, ids)
})