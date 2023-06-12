// function onceShow(numb) {
//     let arr = [];
//     let result = [];
//     let temp = false;
//     arr.push(numb);
    
//     arr.map(n => {
//         for(let i = 0; i < n.length; i++) {
//             for(let j = 0; j < n.length; j++) {
//                 if(i == j) {
//                     temp = n[i];
//                 } else if(n[i] != n[j]) {
//                     temp = n[i];
//                 } else {
//                     temp = false;
//                     break;
//                 }
//             }

//             if(temp != false) {
//                 result.push(Number(temp));
//             }
//         }
//     });

//     return result;
// }

// Test cases
// console.info(onceShow("1234123"));      // [4]
// console.info(onceShow("76523752"));     // [6, 3]
// console.info(onceShow("12345"));        // [1 2 3 4 5]
// console.info(onceShow("1122334455"));   // []
// console.info(onceShow("0872504"));      // [8 7 2 5 4]


// ===========================================================================================


// function joinArrayRemoveDuplicate(arrayA, arrayB) {
//     let arr = [];
//     let temp = false;
//     let result = [];

//     for(let i = 0; i < arrayA.length; i++) {
//         result.push(arrayA[i]);
//     }

//     for(let j = 0; j < arrayB.length; j++) {
//         for(let k = 0; k < arrayA.length; k++) {
//             if(arrayB[j] != arrayA[k]) {
//                 temp = arrayB[j];
//             } else {
//                 temp = false;
//                 break;
//             }
//         }

//         if(temp != false) {
//             arr.push(temp);
//         }
//     }

//     for(let l = 0; l < arr.length; l++) {
//         result.push(arr[l]);
//     }

//     return result;
// }

// Test cases
// console.info(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
// ["apel", "anggur", "lemon", "leci", "nanas"]

// console.info(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
// ["samsung", "apple", "sony", "xiaomi"]

// console.info(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
// ["football", "basketball"]

// console.info(joinArrayRemoveDuplicate(["cake", "kebab"], ["kebab", "coffee", "cake"]));
// ["cake", "kebab", coffee"]



// ===========================================================================================



// function findaMaxSumSubArray(numb, arr) {
//     let result = 0;
//     let temp = 0;
//     for(let i = 0; i < arr.length; i++) {
//         temp = numb + arr[i];
//         if(result < temp) {
//             result = temp;
//         }
//         temp = 0;
//     }

//     return result;
// }

// console.info(findaMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]));      // 8
// console.info(findaMaxSumSubArray(2, [2, 3, 4, 1, 5]));         // 7
// console.info(findaMaxSumSubArray(2, [2, 1, 4, 1, 1]));         // 6
// console.info(findaMaxSumSubArray(3, [2, 1, 4, 1, 1]));         // 7
// console.info(findaMaxSumSubArray(4, [2, 1, 4, 1, 1]));         // 8
// console.info(findaMaxSumSubArray(5, [2, 1, 4, 1]));            // 9



// ===========================================================================================



// function pow(x, n) {
//     if(n > 0) {
//         return x * pow(x, n-1);
//     } else {
//         return 1;
//     }
// }

// console.info(pow(2, 3));        // 8
// console.info(pow(7, 2));        // 49
// console.info(pow(10, 5));       // 100000
// console.info(pow(17, 6));       // 24137569
// console.info(pow(5, 3));        // 125
// console.info(pow(5, -3));       // 1



// ===========================================================================================




// function palindrom(word) {
//     let rigthToLeft = "";

//     for(let i = word.length-1; i >= 0; i--) {
//         rigthToLeft += word[i];
//     }

//     if(rigthToLeft == word) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.info(palindrom("civic"))       // true
// console.info(palindrom("katak"))       // true
// console.info(palindrom("kasur rusak")) // true
// console.info(palindrom("kupu-kupu"))   // false
// console.info(palindrom("lion"))        // false
// console.info(palindrom("kapuk"))       // false
// console.info(palindrom("kapak"))       // true



// ===========================================================================================



// const switchChar = param => {
//     let paramSplit = param.split("");

//     for(let i = 0; i < paramSplit.length; i++) {
//         if(i === 0) {
//             console.info(paramSplit.join(" "));
//         } else {
//             paramSplit.push(paramSplit[0]);
//             paramSplit.shift();
//             console.info(paramSplit.join(" "));
//         }
//     }
// };

// // Tes Cases
// switchChar("SOPYAN-TIRTO-LAKSONO");
// console.info("======================================================");
// switchChar("FERRY-IRAWAN");



// ===========================================================================================



// function queue() {
//     let list = [];

//     for(let i = 0; i < 3; i++) {
//         let input = prompt("Input your name here..");
//         list.push(input);
//         console.info(list);
//     }
//     for(let j = list.length; j > 0; j--) {
//         list.shift();
//         console.info(list);
//         if(list < 1) {
//             console.info("List empty!");
//         }
//     }
// }

// function runTimeQueue(x) {
//     while(x > 0) {
//         setTimeout(function() {
//             queue();
//         }, 3000);
//         x--;
//     }
// }

// runTimeQueue(2);



function stack() {
    let list = [];

    for(let i = 0; i < 3; i++) {
        let input = prompt("Input your name here..");
        list.push(input);
        console.info(list);
    }
    for(let j = list.length; j > 0; j--) {
        list.pop();
        console.info(list);
        if(list < 1) {
            console.info("List empty!");
        }
    }
}

function runTimeStack(x) {
    while(x > 0) {
        setTimeout(() => {
            stack();
        }, 3000);
        x--;
    }
}

runTimeStack(1);