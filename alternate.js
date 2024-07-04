// const elementRemover = (array, value) => {
//     let newArr = [];
//     let index = 0;

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] !== value) {
//             newArr[index] = array[i];
//             index++;
//         }
//     }
//     return newArr; 
// }
// console.log(elementRemover([1,2,3], 2));


// const lastElemRemover = (arr) => {
//     if (arr.length <= 3) {
//         return [];
//     }

//     let newArr = [];
//     let newIndex = 0;
//     for (let i = 0; i < arr.length - 3; i++) {
//         newArr[newIndex] = arr[i];
//         newIndex++;
//     }
//     return newArr;
// }

// let values = [1, 2, 3];
// console.log(lastElemRemover(values));

// const arrayMarger = (arr1, arr2) => {
//     let margedArray = [];
//     let newIndex = 0;

//     for(let i = 0; i < arr1.length; i++) {
//         // margedArray.push(arr1[i]);
//         margedArray[newIndex] = arr1[i];
//         newIndex++;
//     }

//     for(let j = 0; j < arr2.length; j++) {
//         // margedArray.push(arr2[j]);
//         margedArray[newIndex] = arr2[j];
//         newIndex++;
        
//     }

//     let uniqueArray = [];
//     for(let k = 0; k < margedArray.length; k++) {
//         let isDuplicate = false;
//         for(let l = 0; l < uniqueArray.length; l++) {
//             if(margedArray[k] === uniqueArray[l]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate) {
//             uniqueArray.push(margedArray[k]);
//         }
//     }

//     for(let m = 0; m < uniqueArray.length; m++) {
//         for(let n = 0; n < uniqueArray.length-1; n++) {
//             if(uniqueArray[n] > uniqueArray[n+1]) {
//                 let temp = uniqueArray[n];
//                 uniqueArray[n] = uniqueArray[n+1];
//                 uniqueArray[n+1] = temp;
//             }
//         }
//     }

//     return uniqueArray;


// } 
// let array1 = [-45, 12, 0, -1, -26, 10];
// let array2 = [17, -26, -1, 0, 60, -2];
// console.log(arrayMarger(array1, array2));

const checker = (arr1, arr2) => {
    let merged = [];
    let mergedIndex = 0;

    for(let i = 0; i < arr1.length; i++) {
        merged[mergedIndex] = arr1[i];
        mergedIndex++;
    }

    for(let j = 0; j < arr2.length; j++) {
        merged[mergedIndex] = arr2[j];
        mergedIndex++;
    }
    
    return merged;
}
let arr1 = [-1, 0, 1];
let arr2 = [-2, 0, 2];

console.log(checker(arr1, arr2));