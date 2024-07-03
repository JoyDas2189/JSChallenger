// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.


// function sumCalculator (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let value = [10, 20, 30, 40, 50];
// console.log(sumCalculator(value));


// Write a function that takes an array of numbers as argument. It should return the average of the numbers.


// function averageCalculator (arr) {
//     sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let length = arr.length;
//     let average = sum / length;
//     return average;
// }
// let values = [-50,0,50,200];
// console.log(averageCalculator(values));


// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.


// function negativeFounder (arr) {
//     count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let values = [-4,-3,2,-1,0];
// console.log(negativeFounder(values));

// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

function equalityChecker(arr) {
    for (let i = 0; i < arr.length; i++) {
        let firstElement = arr[0];
        if(arr[i] !== firstElement) {
            return false;
        }
    }
    return true;
}
let value = ['test', 'test', 'test'];
console.log(equalityChecker(value)); 