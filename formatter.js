class Formatter {

  constructor(){
    this.header = " date || credit || debit || balance"
  }
  
  resultFormatter(result){
    result.reverse()
    result.unshift(this.header)
    let formatted = result.join("\n")
    return formatted
  }

  dateFormatter(dateObject){
    let firstFormat = dateObject.toISOString().slice(0,10)
    let result = firstFormat.split("-").reverse().join("/")
    return result 
  }
}

module.exports = Formatter