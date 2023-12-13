function generateTransactionId(){
    return Symbol(Math.random())
}
console.log("new Transaction Id", generateTransactionId())