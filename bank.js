const Transaction = require("./transaction")
const Formatter = require("./formatter.js")


class Bank {
  constructor(){
    this.transactionHistory = []
    this.transactionClass = Transaction 
    this.formatter = new Formatter
  }

  withdraw(amount, date) {
    let transaction = new Transaction(amount, "debit", date)
    this.recordWithdrawal(transaction)
    return amount
  }

  recordWithdrawal(transaction){
    let loggedTransaction = {"credit": 0, "debit": transaction.amount, "date": transaction.date, balanceChange: (-transaction.amount)}
    this.transactionHistory.push(loggedTransaction)
    return loggedTransaction
  }

  deposit(amount, date) {
    let transaction = new Transaction (amount, "credit", date)
    this.recordDeposit(transaction)
    return amount
  }

  recordDeposit(transaction){
    let loggedTransaction = {"credit": transaction.amount, "debit": 0, "date": transaction.date, balanceChange: (+transaction.amount)}
    this.transactionHistory.push(loggedTransaction)
    return loggedTransaction
  }

  calculateStatement(){
    let balance = 0
    let result = []
    for (let i = 0; i < this.transactionHistory.length; i++){
      let index = this.transactionHistory[i]
      let formattedDate = this.formatter.dateFormatter(index.date)
      balance += index.balanceChange
      result.push(` ${formattedDate} || ${index.credit == 0 ? "" : index.credit.toFixed(2)} || ${index.debit == 0 ? "" : index.debit.toFixed(2)} || ${balance.toFixed(2)}`)
    }
    return result
  }

  printStatement(){
    let result = this.calculateStatement()
    let printOut = this.formatter.resultFormatter(result)
    console.log(printOut)
    return printOut
  }
}

module.exports = Bank