const Transaction = require("../lib/transaction");
const transaction = new Transaction(150, "credit")


describe("Transaction", () => {
  describe("getBalance", () =>{
    it("returns the credit/debit balance of a transaction ", () =>{
      expect(transaction.getBalance()).toBe(150);
    })
  })
  describe("getDate", () =>{
    it("returns a date object", () =>{
      expect(transaction.getDate()).toBeInstanceOf(Date)
      expect((typeof(transaction.getDate()) == "object")).toBe(true)
    })
  })

  describe("getType", () =>{
    it("returns the type of transaction credit/debit", () =>{
      expect(transaction.getType()).toBe("credit")
    })
  })
})