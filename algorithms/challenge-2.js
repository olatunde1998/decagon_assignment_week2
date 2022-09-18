function sumOfTwoSmallestNums(arr){
    let sortArr = arr.sort((a,b) => a-b)
    let result = sortArr[0] + sortArr[1]
    console.log(result);
} 

sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]) 
// to return 3
sumOfTwoSmallestNums([12,34,23,12,67]) 
// to return 24 
sumOfTwoSmallestNums([999,234,567,78,2]) 
    // to return 80 

module.exports = sumOfTwoSmallestNums


