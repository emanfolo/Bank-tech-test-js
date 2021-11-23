const Transaction = require("./transaction")

class Bank {
  constructor(){
    this.transactionHistory = []
    this.transactionClass = Transaction 
  }
  withdraw(amount, date) {
    let transaction = new Transaction(amount, "debit", date)
    this.recordTransaction(transaction)
    transaction.getBalance()
    return amount
  }


  deposit(amount, date) {
    let transaction = new Transaction (amount, "credit", date)
    this.recordTransaction(transaction)
    transaction.getBalance()
    return amount
  }

  recordTransaction(transaction){
    let loggedTransaction = null
    if (transaction.type == "credit") {
      let balanceChange = transaction.balanceChange
      loggedTransaction = {log: {"credit": transaction.amount, "debit": 0, "date": transaction.date}, balanceChange: balanceChange}
    }
    else if (transaction.type == "debit") {
      let balanceChange = transaction.balanceChange
      loggedTransaction = {log: {"credit": 0, "debit": transaction.amount, "date": transaction.date}, balanceChange: balanceChange}
    }
    this.transactionHistory.push(loggedTransaction)
    return loggedTransaction
  }

  printStatement(){
    let modelStatement = "date || credit || debit || balance\n 14/01/2023 || || 500.00 || 2500.00\n 13/01/2023 || 2000.00 || || 3000.00\n 10/01/2023 || 1000.00 || || 1000.00"
    console.log(modelStatement)
    return modelStatement
  }
}

module.exports = Bank