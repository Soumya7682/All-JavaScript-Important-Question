// console.log("1"+"5");
// console.log("5"-"1");
// let str1="knjks";
// let str2="lknk";
// let ans=str1-str2;
// console.log(ans);
// let arr=[1,2,3,4,6];
// let newArr=[4,5,6,...arr];
// console.log(newArr);
// let nw=arr.concat(newArr);
// console.log(nw)

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("hjkxk"));
// console.log(Array.from("jkbk"));
// const num1=52;
// const num2=65;
// console.log(Array.of(num1,num2));

// let obj={
//     name:"soumya",
//     "roll":"183",
//     gmail:"soumya@gmail.com"
// }
// console.log(obj.name);
// console.log(obj["roll"])
// Object.freeze(obj);
// obj.gmail="singh@gmail.com"
// console.log(obj)

// let obj=new Object();
// obj.name="soumya";
// obj.roll="183";
// console.log(obj.name);

// let obj1={
//     name:"soumya"
// }
// let obj2={
//     roll:"23mc183"
// }
// // let ans={...obj1,...obj2}
// // let ans=Object.assign(obj1,obj2);
// // let ans=Object.keys(obj1);
// // let ans=obj2.hasOwnProperty("roll")

// console.log(ans);

//IIFE-:Reduce the global Scope polution for variable we use iffe function
// (function son(name){
// console.log(`iam ${name}`)
// })('soumya');
// (()=>{
//     console.log(`iam Soumya`)
// })();
//Naulish coalsing operation
// let variable=5 ?? 4;
//If any null value is present in the value then it return number 
// let variable= null ?? 4;
// console.log(variable);

// const Obj="sou"
// for(const New of Obj){
//     console.log(New);

// }
// const arr=["sr","lr"];
// for(const num of arr){
//     console.log(num)
// }

const arr=["js","py","java"];
// for(let newArr in arr){
//     // console.log(newArr);
//     console.log(`${newArr} i love ${arr[newArr]}`);
// }
arr.forEach((item,index,array)=>{
    console.log(`item name ${item} and sl no ${index} with return ${array}`)
})

