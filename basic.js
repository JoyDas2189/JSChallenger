// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// function myFunction(a, n){
//     return a[n-1];
// }
// console.log(myFunction([1,2,3,4,5],3))

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

// function elementRemover () {

// }
// let value = [1, 2, 3, 4];
// elementRemover(value);

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

// function equalityChecker(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let firstElement = arr[0];
//         if(arr[i] !== firstElement) {
//             return false;
//         }
//     }
//     return true;
// }
// let value = ['test', 'test', 'test'];
// console.log(equalityChecker(value)); 


// Write a function that takes an array of strings as argument. Return the longest string.

/*
const myFunction = (arr) => {
    let longestValue = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestValue.length) {
            longestValue = arr[i];
        }
    }
    return longestValue;
}
console.log(myFunction(["Happy", "Birthday"]));
*/

const myFunction = (arr) => {
    if(arr.length <= 3) {
        return [];
    }

    let newArr = [];
    for(let i = 3; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(myFunction([1,2,3,4,5]));