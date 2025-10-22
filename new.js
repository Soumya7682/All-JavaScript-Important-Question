// let name="soumya";
// console.log(name.split("").reverse().join(""));

// function CheckPalindrom(name){
//     let org=name;
// let revers=name.split("").reverse().join("");
// return org===revers;
// }
// console.log(CheckPalindrom("lool"));

// let arr=[1,2,3,4];
// arr.length=0;
// console.log(arr);

// function isInte(ele){
//     return Number.isInteger(ele);
// }
// console.log(isInte("11"));

// function dupli(arr){
//     return arr.concat(arr);
// }
// console.log(dupli([1,2,3,4,5]))


// let arr=[1,2,3,5];
// let ans=arr.reduce((curr,ele)=>{
//     return curr+ele;
// })
// console.log(ans);


// function revNum(ele){
//     return Number(ele.split("").reverse().join(""));
// }
// console.log(revNum("123"));

//Sorting a string acc alphabatically

// function alphaSort(str){
//     return str.split("").sort().join("");
// }
// console.log(alphaSort("name"));

// let name="rudranarayan sahoo";
// console.log(name.charAt(0).toUpperCase()+ name.substring(1));

// function capitalise(name){
//     let ans=name.split(" ").map((str)=>{
//     return str.charAt(0).toUpperCase()+str.substring(1);

//     })
//     return ans.join("");
    
// }
// console.log(capitalise("rudranarayan sahoo"))\
// let str="soumyaranjan";
// let occ={};
// str.split("").forEach((elem)=>{
//     if(occ.hasOwnProperty(elem)===false){
//         occ[elem]=1;
//     }else{
//         occ[elem]++;
//     }
// })
// console.log(occ);


// let arr=new Array(1,2,3,4,6);
// let ans=arr.reduce((acc,ele)=>{
//     return acc+ele;
// },0); //Intitilaising the value of acc
// console.log(ans);

// let arr=[1,2,"msd","ll",3];
// let sum=0;
// arr.forEach((e)=>{
//     if(typeof(e)==="number"){
//         sum=sum+e;
//     }
// })
// console.log(sum);

// let arr1=[1,2,4,5,6];
// let arr2=[3,7,8,9];
// let ansArr=[...arr1,...arr2]
// console.log(...ansArr.sort());

// function Clone(arr,arr1){
//     return [...arr,...arr1];
// }
// console.log(Clone([1,2,3,4,5,6],[7,8,9]));

//Show the element in array

// function ShowArr(arr,n){
//     if(n<arr.length){
//         for(let i=0;i<n;i++){
//             console.log(arr[arr.length-1-i]);
//         }
//     }else{
//         console.log("You enter out of bound from the array")
//     }
// }
// ShowArr([1,2,3,4,5],1);


// function UnionOfArr(arr1,arr2){
//     return [...new Set(arr1.concat(arr2))]
// }
// console.log(UnionOfArr([1,2,3,4,5],[2,3,4,5,6,7,8,9]));

//Remove the duplicate element in the array

let arr=[1,2,3,4,5,6,1,2,3];
console.log([...new Set(arr)]);