
let sum = 0;
let A = Number(prompt("Enter Staring:"));
let B = Number(prompt("Enter Ending:"))
if (A>=0 && B<=10000) {

    for (let i = A; i <= B; i++)
        sum = sum + i;
}
else{
    console.log("Please Enter a valid range between 0-10000!!!")
}
console.log(sum);