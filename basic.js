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
//     for (let i = 1; i < arr.length; i++) {
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
// let value = ['test', 'test', 'test', 'kjjj'];
// console.log(equalityChecker(value)); 


// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.


// function sortedArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// let value = [10, 12, 5, 80, 100];
// sortedArray(value);

// Write a function that takes an array of strings as argument. Return the longest string.


// const myFunction = (arr) => {
//     let longestValue = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].length > longestValue.length) {
//             longestValue = arr[i];
//         }
//     }
//     return longestValue;
// }
// console.log(myFunction(["Happy", "Birthday"]));

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result


// const myFunction = (arr) => {
//     if(arr.length <= 3) {
//         return [];
//     }

//     let newArr = [];
//     for(let i = 3; i < arr.length; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(myFunction([1,2,3,4,5]));


// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

// const lastElemRemover = (arr) => {
//     if (arr.length <= 3) {
//         return [];
//     }

//     let newArr = [];
//     for (let i = 0; i < arr.length - 3; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// let values = [1, 2, 3, 4, 5, 6, 7];
// console.log(lastElemRemover(values));



// const ascendingArray = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length-1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let values = [0,-1 , 51 ,-1, 1];
// console.log(ascendingArray(values));


// const arrDescending = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(j = 0; j < arr.length-1; j++) {
//             if(arr[j] < arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;

// }
// let values = [1, 4, 6 ,3, 2];
// console.log(arrDescending(values));



const arrayMarger = (arr1, arr2) => {
    let margedArray = [];

    for(let i = 0; i < arr1.length; i++) {
        margedArray.push(arr1[i]);
    }

    for(let j = 0; j < arr2.length; j++) {
        margedArray.push(arr2[j]);
        
    }

    // let uniqueArray = [];
    // for(let k = 0; k < margedArray.length; k++) {
    //     let isDuplicate = false;
    //     for(let l = 0; l < margedArray.length; l++) {

    //     }
    //     // if(!uniqueArray.includes(margedArray[k])) {
    //     //     uniqueArray.push(margedArray[k]);
    //     // }
    // }

    let uniqueArray = [];
    for(let k = 0; k < margedArray.length; k++) {
        let isDuplicate = false;
        for(let l = 0; l < uniqueArray.length; l++) {
            if(margedArray[k] === uniqueArray[l]) {
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate) {
            uniqueArray.push(margedArray[k]);
        }
    }

    for(let m = 0; m < uniqueArray.length; m++) {
        for(let n = 0; n < uniqueArray.length-1; n++) {
            if(uniqueArray[n] > uniqueArray[n+1]) {
                let temp = uniqueArray[n];
                uniqueArray[n] = uniqueArray[n+1];
                uniqueArray[n+1] = temp;
            }
        }
    }

    return uniqueArray;
} 
let array1 = [-45, 12, 0, -1, -26, 10];
let array2 = [17, -26, -1, 0, 60, -2];
console.log(arrayMarger(array1, array2));

// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

// const elementRemover = (a, b) => {
//     let newArr = [];
//     let index = 0;

//     for(let i = 0; i < a.length; i++) {
//         if(a[i] !== b) {
//            newArr[index] = a[i];
//            index++
//         }
//     }
//     return newArr; 
// }
// console.log(elementRemover([1,2,3], 2));


// Write a function that takes an array (a) as argument. Return the number of elements in a.

// const elementCounter = (arr) => {
//    let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         count++;
//     }
//     return count;
// }
// let value = [-1, 0, 1];
// console.log(elementCounter(value));