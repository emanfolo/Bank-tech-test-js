const Formatter = require("../lib/formatter")
const formatter = new Formatter

describe("Formatter", () =>{
  describe("dateFormatter", () =>{
    it("formats a date object to an acceptable string", () =>{
      let modelDate = "14/01/2023"
      expect(formatter.dateFormatter(new Date("January 14, 2023"))).toEqual(modelDate)
    })
  })

  describe("resultFormatter", () =>{
    it("should format the newly created array to be ready for printing", ()=>{
      let input = ["1", "2", "3", "4"]
      let modelResult = " date || credit || debit || balance\n4\n3\n2\n1"
      expect(formatter.resultFormatter(input)).toBe(modelResult)
    })
  })

})

