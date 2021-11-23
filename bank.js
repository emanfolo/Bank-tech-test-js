const Transaction = require("./transaction")

class Bank {
  constructor(){
    this.transactionHistory = []
    this.transactionClass = Transaction 
  }
  withdraw(amount, date) {
    let transaction = new Transaction(amount, "debit", date)
    this.recordTransaction(transaction)
    return amount
  }


  deposit(amount, date) {
    let transaction = new Transaction (amount, "credit", date)
    this.recordTransaction(transaction)
    return amount
  }

  recordTransaction(transaction){
    let loggedTransaction = null
    if (transaction.type == "credit") {
      loggedTransaction = {"credit": transaction.amount, "debit": 0, "date": transaction.date, balanceChange: (+transaction.amount)}
    }
    else if (transaction.type == "debit") {
      loggedTransaction = {"credit": 0, "debit": transaction.amount, "date": transaction.date, balanceChange: (-transaction.amount)}
    }
    this.transactionHistory.push(loggedTransaction)
    return loggedTransaction
  }

  dateFormatter(dateObject){
    let firstFormat = dateObject.toISOString().slice(0,10)
    let result = firstFormat.split("-").reverse().join("/")
    return result 
  }

  printStatement(){
    let balance = 0
    let result = []
    for (let i = 0; i < this.transactionHistory.length; i++){
      let index = this.transactionHistory[i]
      let formattedDate = this.dateFormatter(index.date)
      balance += index.balanceChange
      result.push(` ${formattedDate} || ${index.credit == 0 ? "" : index.credit.toFixed(2)} || ${index.debit == 0 ? "" : index.debit.toFixed(2)} || ${balance.toFixed(2)}`)
    }
    result.reverse()
    result.unshift(" date || credit || debit || balance")
    let printOut = result.join("\n")
    console.log(printOut)
    return printOut
  }
}

module.exports = Bank