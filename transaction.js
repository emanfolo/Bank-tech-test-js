class Transaction {
  constructor (amount, type, date) {
    date == null ? this.date = new Date : this.date = date
    this.amount = amount
    this.type = type
  }

  getBalance() {
    let balance = null
    this.type == "credit" ? balance = (this.amount) : balance = (-this.amount)
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