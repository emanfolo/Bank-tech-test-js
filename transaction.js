class Transaction {
  constructor (amount, type, date) {
    date == null ? this.date = new Date : this.date = date
    this.amount = amount
    this.type = type
    this.balanceChange
  }

  getBalance() {
    let balance = null
    this.type == "credit" ? balance = (this.amount) : balance = (-this.amount)
    this.balanceChange = balance
    return balance 
  }

  getDate () {
    return this.date
  }

  getType () {
    return this.type
  }
}

module.exports = Transaction