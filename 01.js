let st="soumya";
let an=st.split(" ").map((e)=>{
    return e.split("").reverse().join("")
})
console.log(an);


function check(e){
    return Array.isArray(e);
}
console.log(check([]))
console.log(check({}))

var arr=[1,2,3,4,5];
var change=arr.length=0;
console.log(change);


function checkInteger(e){
    return Number.isInteger(e)
}
console.log(checkInteger(1.2));
console.log(checkInteger(5));

let nu=56;

if(nu%1===0){
    console.log("integer")
}
else{
    console.log("not integer");
}


function duplicate(e){
    return e.concat(e);
}
console.log(duplicate([1,2,3]));

let numb=12;
function RevNum(numb){
 return Number(numb.toString().split("").reverse().join(""))
}
console.log(RevNum(12));

function reLogic(numb){
let rev=0;
while(numb>0){
    let rem=numb%10;
    rev=rev*10+rem;
    numb=Math.floor(numb/10);
}
return rev;
}
console.log(reLogic(12345))


let num=101;

let ans= Number(num.toString().split("").reverse().join(""))
if(num===ans) console.log("its is a palindrom number");
else console.log("not a palindrom number")

function checkPalindromSTR(orgStr){
let ans=orgStr.split("").reverse().join("")

// console.log(orgStr)
// console.log(ans);
if(orgStr===ans) console.log("palindrom string");
else console.log("not a palindrom str")


}
checkPalindromSTR("lool")



function sortingAccordingToAlpha(e){
return e.split("").sort()
}
console.log(sortingAccordingToAlpha("soumya").join(""));


let str="soumya"
let ans=str.charAt(0).toUpperCase()+str.substring(1)
console.log(ans)
function CapitaliseFst(str){
    let ans=str.split(" ").map((str)=>{
       return str.charAt(0).toUpperCase()+str.substring(1)

    })
    return ans.join(" ")
}
console.log(CapitaliseFst("soumya ranjan singh"))

function countDupli(str){
    var occr={};
    str.split("").forEach((elem)=>{
        if(occr.hasOwnProperty(elem)===false)
            occr[elem]=1;
else{
    occr[elem]++
}            
    });
    return occr;
}
console.log(countDupli("soumyaranjan"))


function checkType(e){
    return typeof(e);
}
console.log(checkType([]));
console.log(checkType(true))