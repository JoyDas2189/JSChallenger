// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// function myFunction (a, n) {
//     return a[n-1];
// }
// console.log(myFunction([1,2,3,4,5],3));

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

// function
// myFunction(a){
//     return a.slice(3);
// }
// console.log(myFunction([1,2,3,4])
// )

// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

// function myFunction (a) {
//     return a.slice(-3);
// }
// console.log(myFunction([1,2,3,4]));


// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

// function myFunction (a) {
//     return a.slice(0, 3);
// }
// console.log(myFunction([1,2,3,4]));


// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

// function myFunction (a, n) {
//     return a.slice(-n);
// }
// console.log(myFunction([1, 2, 3, 4, 5], 2));


// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

// function myFunction (a, b) {
//     return a.filter((num) => num !==b )
// }


    
// console.log(myFunction([1,2,3], 2));

// Write a function that takes an array (a) as argument. Return the number of elements in a.

// function myFunction (a) {
//     return a.length;
// }
// console.log(myFunction([1,2,2,4]));

// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

// function myFunction (a) {
//     return a.filter((val) => val < 0).length;
// }


// console.log(myFunction([1,-2,2,-4]));

// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

// function myFunction (arr) {
//     return arr.sort()
// }
// console.log(myFunction(['b', 'c', 'd', 'a']));


// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
// function myFunction (arr) {
//     return arr.sort((a, b) => b - a);
// }
// console.log(myFunction([1,3,2]));



// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

// function myFunction(a) {
//     let sum = a.reduce((num1, num2) => num1 + num2);
//     return sum;
// }
// console.log(myFunction([10,100,40]))


// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

// function myFunction (arr) {
//   let sum = arr.reduce((num1, num2) => num1 + num2, 0);
//   let arrLength = arr.length;
//   let average = sum / arrLength;
//   return average;
// }
// console.log(myFunction([10,100,40]));


// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

// function myFunction (a, b) {
//     let 
// }
// console.log(myFunction([1, 2, 3], [3, 4, 5]))

// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

// function myFunction (...arrays) {
//     return 
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]));