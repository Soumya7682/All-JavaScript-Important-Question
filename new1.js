// let str="despacito";
// console.log(str.split("").reverse().join(""));

// function reverseStr(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("soumya"));

// let arr=[1,2,3];
// console.log(arr.length);
// arr.length=0;
// console.log(arr);
// console.log(arr.length);

// function checkInteger(num){
//     return Number.isInteger(num);
// }
// console.log(checkInteger(123))

// let num="122";
// if(Number(num%1===0)){
//     console.log("Integer");
// }else{
//     console.log("its not an integer");
// }
// function duplicate(arr){
//     return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4,5]))

// let num=123;
//  console.log(num.toString().split("").reverse().join(""))
let num=457;
let rev=0;
while(num>0){
    let rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);

}
console.log(rev);


//These are the practices thing