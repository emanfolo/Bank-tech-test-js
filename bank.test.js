const Bank = require("./bank")
const bank = new Bank
const testDate = new Date ('November 10, 2022 03:24:00')


describe("Bank", () =>{

  describe("deposit", () => {
    it("allows a user to deposit £30", () =>{
      expect(bank.deposit(30)).toBe(30)
  })
})

  describe("withdraw", () =>{
    it("allows a user to withdraw £20", () =>{
      expect(bank.withdraw(20)).toBe(20)
    })
  })

  describe("recordTransaction", () =>{
    it("saves a transaction in the form of an object", () =>{
      let mockTransactionObject = {amount: 30, type: "debit", date: testDate, balanceChange: -30 }
      let modelTransaction = {log: {credit: 0, debit: 30, date: testDate}, balanceChange: -30}
      expect(bank.recordTransaction(mockTransactionObject)).toEqual(modelTransaction)
    })
  })

  describe("printStatement", () =>{
    it("prints out a bank statement in the correct format", () =>{
      let modelStatement = "date || credit || debit || balance\n 14/01/2023 || || 500.00 || 2500.00\n 13/01/2023 || 2000.00 || || 3000.00\n 10/01/2023 || 1000.00 || || 1000.00"
      bank.deposit(1000, new Date("January 10, 2023"))
      bank.deposit(2000, new Date("January 13, 2023"))
      bank.withdraw(500, new Date("January 14, 2023"))
      expect(bank.printStatement()).toEqual(modelStatement)
      
    })
  })

})