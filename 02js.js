let arr=[1,2,3,4,5];
let ans=arr.reduce((acc,cur)=>{
    return acc+cur
})
console.log(ans);

let sum=0;
arr.forEach((e)=>{
    return sum=sum+e;
})
console.log(sum);

let mix=["kla",123,"bya",2];
let sum=0
mix.forEach((e)=>{
    if(typeof(e)==="number"){
sum=sum+e;
    }
    
})
console.log(sum);

let arr=[1,2,3];
let arr1=[3,4,5];
console.log(...arr,...arr1);
function cloneArr(arr){
    return [...arr];
}
console.log(cloneArr([1,2,3]))


Print First values of the array
function ShowEleinArr(arr,n=1){
    if(n<=arr.length){
        for(let i=0;i<n;i++){
            console.log(arr[i]);
        }
    }
    else{
        console.log("out of the ARRAY length")
    }
}
ShowEleinArr([1,2,3,],3)

Print last values of the array
function ShowEleinArr(arr,n=1){
    if(n<=arr.length){
        for(let i=0;i<n;i++){
            console.log(arr[arr.length-1-i]);
        }
    }
    else{
        console.log("out of the ARRAY length")
    }
}
ShowEleinArr([1,2,3,4,5,6],3)

function SuffelArr(arr){
    var totalSuffelArea=arr.length;
    while(totalSuffelArea>0){
        totalSuffelArea--;

        var indexTobeExchange=Math.floor(Math.random()*totalSuffelArea);
        var temp=arr[totalSuffelArea]
        arr[totalSuffelArea]=arr[indexTobeExchange];
        arr[indexTobeExchange]=temp;
    }
    return arr;

}
console.log(SuffelArr([1,2,3,4,5,6]))


Union of two array
function Union(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]
}
console.log(Union([1,2,3],[3,4,5]))

REmove the duplicate from the array
let arr=[1,2,3,4,5,6,6,5,7,8,9];
let ans=[...new Set(arr)];
console.log(ans);


let arr=[12,3,12,5,2,3,7,8,8,8,9]
let ans=[...new Set(arr)];
console.log(ans)

let obj={
    name:"soumya",
    ph:"12345"
}
console.log(obj)
delete obj.ph;
console.log(obj)