const Bank = require("../lib/bank")
const bank = new Bank
const halifax = new Bank
const barclays = new Bank
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

  describe("recordDeposit", () =>{
    it("saves a deposit in the form of an object", () =>{
      let mockTransactionObject = {amount: 30, type: "credit", date: testDate}
      let modelDeposit = {credit: 30, debit: 0, date: testDate, balanceChange: 30}
      expect(bank.recordDeposit(mockTransactionObject)).toEqual(modelDeposit)
    })
  })

  describe("recordWithdrawal", () =>{
    it("saves a withdrawal in the form of an object", () =>{
      let mockTransactionObject = {amount: 30, type: "debit", date: testDate}
      let modelWithdrawal = {credit: 0, debit: 30, date: testDate, balanceChange: -30}
      expect(bank.recordWithdrawal(mockTransactionObject)).toEqual(modelWithdrawal)
    })
  })

  describe("calculateStatement", ()=>{
    it("iterates through transactions to calculate a statement", ()=>{
      let modelCalculation = [" 10/01/2023 || 1000.00 ||  || 1000.00"," 13/01/2023 || 2000.00 ||  || 3000.00", " 14/01/2023 ||  || 500.00 || 2500.00"]
      barclays.deposit(1000, new Date("January 10, 2023"))
      barclays.deposit(2000, new Date("January 13, 2023"))
      barclays.withdraw(500, new Date("January 14, 2023"))
      expect(barclays.calculateStatement()).toEqual(modelCalculation)
    })
  })

  describe("printStatement", () =>{
    it("prints out a bank statement in the correct format", () =>{
      let modelStatement = " date || credit || debit || balance\n 14/01/2023 ||  || 500.00 || 2500.00\n 13/01/2023 || 2000.00 ||  || 3000.00\n 10/01/2023 || 1000.00 ||  || 1000.00"
      halifax.deposit(1000, new Date("January 10, 2023"))
      halifax.deposit(2000, new Date("January 13, 2023"))
      halifax.withdraw(500, new Date("January 14, 2023"))
      expect(halifax.printStatement()).toEqual(modelStatement)
    })
  })
})

