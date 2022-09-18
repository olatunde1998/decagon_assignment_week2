// # Challenge 3

function squareDigit(str) {
    let splitStr = str.split("")
    let sqSplit = splitStr.map((item) => Math.pow(item, 2))
    let result = sqSplit.join("")
    console.log(result);
}

squareDigit('9119') 
// to  return 811181
squareDigit('289') 
// to return 46481
squareDigit('345') 
// to return 91625
squareDigit('7772') 
// to return 4949494

module.exports =squareDigit
