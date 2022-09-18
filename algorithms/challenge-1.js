function sumOfMultiples(arr) {
    let sumResult = [];
    for (let i = 0; i < arr.length; i++) {
        let newItem = arr[i];
        if(newItem % 3 === 0 || newItem % 5 === 0){
            sumResult.push(newItem);   
        }
    }
    console.log(sumResult.reduce((a,b) => a + b));
}
module.exports = sumOfMultiples


sumOfMultiples([6, 3, 0, 30, 7])  
// to return 39
sumOfMultiples([9, 3, 21, 30, 7,8,4,2]) 
// to return 63
sumOfMultiples([10, 20, 11, 17, 7])  
// to return 30


//Challenge 1 solved using filter() method

// function sumOfMultiples(arr) {
//     let final = arr.filter(item =>item % 3 === 0 || item % 5 === 0 ) 
//      let answer = final.reduce((a,b) => a+b)
//      console.log(answer);
 
//  }
 
//  sumOfMultiples([6, 3, 0, 30, 7])  
 // to return 39
//  sumOfMultiples([9, 3, 21, 30, 7,8,4,2]) 
 // to return 63
//  sumOfMultiples([10, 20, 11, 17, 7])  
 // to return 30
 


 //challenge 1 solved using map function
// let arr =  [10, 20, 11, 17, 7]
// let sumResult = []
// const total = arr.map((item) =>{
//     if(item % 3 === 0 || item % 5 === 0){
//         sumResult.push(item);
//     }
// })
// console.log(sumResult.reduce((a,b) => a + b));