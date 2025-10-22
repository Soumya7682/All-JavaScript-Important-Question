const dt=new Date();
console.log(dt.getFullYear());
console.error("Error")
function square(num){
    return num.
}


let a=5;
console.log(sqrt(a));
console.log(Math.PI)
console.log(typeof null)
console.log(typeof NaN)
let a=undefined;
console.log( typeof undefined)
let i=0
while(i<51){
    console.log(i)
    i++

}
let str="javaScript";
for(let letter of str){
    console.log(letter);
}
for(let i=0;i<21;i++){
    // if(i%2==0){
    //     continue;
    // }
    // else{
    //     console.log(i)
    // }
    if(i%2!==0){
        console.log(i);
    }
}
var a=5;

do{
    console.log(a)
    a--
}while(a>=0)
let fact=1;
for(let i=5;i>0;i--){
fact=fact*i;
}
console.log(fact)
let hold=1;
for(let i=1;i<4;i++){
    let str="";
    for(let j=1;j<4;j++){
        str+=`${hold} `;
        hold++;
    }
    console.log(str);
}
let arr=[1,2,4,5,6];
let arr1=[1,2,4,5,6];



console.log(arr.reverse());
for(let i=0;i<Math.floor(arr.length/2);i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr)
console.log(arr.slice(1,3))
console.log(arr.splice(1,3))
console.log(arr.indexOf(1))
console.log(arr.includes(5))
console.log(arr.concat(arr1))
console.log(arr.sort())


Copy the array without mutating the array
let arr=[11,22,34,4,5,15,66];
// let arr1=[...arr];
// console.log(arr1);
let arr2=[];
arr.forEach((e)=>{
    arr2.push(e)
});
console.log(arr2);

function check(num){
    if(num%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }


}
check(5);

Write a function that return its sum
function sum(arr){
    let Sum=0;
    arr.forEach((e)=>{
        Sum=Sum+e;
    })
    return Sum
}
console.log(sum([1,2,4,5]))

let arr=[1,2,3,4];
let ans=arr.reduce((acc,ele)=>{
    return acc+ele;
})
console.log(ans);


function Checker(str,char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(Checker("soumya","S"));

function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5))

function RevStr(str){
    return str.split("").reverse().join("");
}
console.log(RevStr("soumya"));

function Max(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[max]){
            max=i;
        }
    }
    return arr[max];
}
console.log(Max([12,4,5]))

function kabab(str){
return str.replaceAll(" ","-");
}
console.log(kabab("hey aman kaise ho"));

function logi(str){
    console.log("hello world");
}
logi();
logi();






