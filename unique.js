const uniqueGenerator = (arr) => {
    let uniqueArray = [];
    for(let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for(let j = 0; j < uniqueArray.length; j++) {
            if(arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let value = [1,2,2,3,4];
console.log(uniqueGenerator(value));

// const uniqueGenerator = (arr) => {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if (!isDuplicate) {
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// let value = [1, 2, 2, 3, 4];
// console.log(uniqueGenerator(value));
