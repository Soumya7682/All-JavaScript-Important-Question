// let a=Number(prompt("Enter a number:"));
// console.log(typeof a);

// function Swap(a,b)
// {
//     console.log("Before Swapping" + a,b)
//     let temp=0;
//     temp=a;
//     a=b;
//     b=temp;
// console.log(a,b)
// return temp
// }
// Swap(12,36)

// function Swap(a,b){
// console.log(a,b)
//     a=a+b;
//     b=a-b;
//     a=a-b;

//     console.log(a,b)
// }
// Swap(14,54);

// let a=12;
// let b=45;

// [a,b]=[b,a];

// console.log(a,b)
// function Reverse(num){
// let rev=0;
// while(num>0){
// let rem= num % 10;
// rev= rev*10 + rem;
// num= Math.floor(num/10);
// }
// return rev;
// }
// console.log(Reverse(123))


// function SumOf(num){
//     let sum=0;
// while(num>0)
// {
// let rem= num%10;
// sum=sum+rem;
// num=Math.floor(num/10);

// }
// return sum;
// }
// console.log(SumOf(456))

// let arr=[12,26,35,36,78,2];
// let max=arr[0];
// let min=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
// }
// else if(min>arr[i]){
//     min=arr[i]
// }

// }
// console.log(max)
// console.log(min)

let arr=[12,45,36,51,2,1,3];
let max=Math.max(arr[0],arr[1]);
let smax=Math.min(arr[0],arr[1]);
for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        smax=max;
        max=arr[i];
    }
}
console.log(smax);