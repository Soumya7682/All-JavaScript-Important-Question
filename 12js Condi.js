// let Unit= 700;
// let ans=0;
// if(Unit>400){
//     ans=(Unit-400)*13;
//     Unit=400;   
// }
// if(Unit>200 && Unit<=400){
//     ans=ans + (Unit-200)*8;
//     Unit=200;
// }
// if(Unit > 100 && Unit <=200){
//     ans= ans + (Unit-100)*6;
//     Unit=100;
// }
// ans=ans+Unit*4;

// console.log(ans);

let amount=4823;
let cash=0;
if(amount>500){
console.log("500 notes:"+Math.floor((amount/500)));
amount= amount%500;
}
if(amount>=200 && amount <500){
    console.log("200 Note :"+Math.floor((amount/200)));
    amount= amount%200;
}
if(amount>=100 && amount <200){
    console.log("100 Notes :"+Math.floor(amount/100));
    amount=amount%100;

}
console.log("Remaining Amount will be :"+amount);