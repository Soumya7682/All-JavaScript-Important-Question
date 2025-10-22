// function revStr(str){
//  return str.split("").reverse().join("");
// }
// console.log(revStr("hello"));


// function CheckPali(str){
//     let Org=str;
//     let ans=str.split("").reverse().join("");
// if(Org===ans){
//     console.log("its a plaindrom number");
// }
// else{
//     console.log("Its not a palindrom number");
// }
// }
// CheckPali("pool");
// CheckPali("lool");


// function findLargest(arr) {
//     if (arr.length === 0) return null; // Handle empty array case
//     let largest = arr[0]; // Assume the first element is the largest
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]; // Update largest if a bigger number is found
//         }
//     }
//     return largest;
// }

// console.log(findLargest([3, 7, 2,8]));

function factorial(num){
    let fact=1;
    for(let i=num;i>0;i--){
        fact=fact*i;
    }
    return fact;
    }
    console.log(factorial(5))
