//Reverse a string cretae a function

// function RevStr(str){
//     return str.split(" ").map((e)=>{
//         return e.split("").reverse().join(" ");
//     })
// }
// console.log(RevStr("Roumya").join(""))

//Check is it a Arrow or object

// function Check(e){
//     return typeof(e);
// }
// console.log(Check([]));
// console.log(Check({}));
// console.log(Check(()=>{}));
// console.log(Check("kj"));

//Do the Size Of the array Zero

// let arr=[1,2,3,4,5];
// arr.length=0;
// console.log(arr.length);

//Check Integer

// function CheckInt(e){
//     return Number.isInteger(e)? "Its an integer":"Its not an integer";
// }
// console.log(CheckInt(12));
// console.log(CheckInt("45"));

//Duplicate an array

// function arr(e){
//     return e.concat(e);
// }
// console.log(arr([12,45,67]));

//Reverse a number

// let num=856;
// let rev=0;
// while(num>0){
//     let dig=num%10;
//     rev=rev*10+dig;
//     num=Math.floor(num/10);
// }
// console.log(rev);

// let num=123;
// let sum=0;
// while(num>0){
//     let dig=num%10;
//     sum=sum+dig;
//     num=Math.floor(num/10)
// }
// console.log(sum);

//Check Both number and the string are Palindrom or not


// function CheckPalindrom(num){
//     let org=num;
//     let rev=0;
//     while(num>0){
//         let digit=num%10;
//         rev=rev*10+digit;
//         num=Math.floor(num/10);
//     }
//     return rev===org?"its a plindrom number":"its not a plindrom number";
// }
// console.log(CheckPalindrom(111))

//String

// function CheckPalindrom(str){
//     let org=str;
//     let ans=str.split(" ").map((e)=>{
//         return e.split("").reverse().join("");
//     })
//     return org===ans.join("")?"its a Palindrom String":"its not a palindrum String";
// }
// console.log(CheckPalindrom("loop"))

// function sortingString(str){
//     return str.split("").sort().join("");
// }
// console.log(sortingString("cba"))





