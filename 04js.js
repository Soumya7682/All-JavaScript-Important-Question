1
What is datatype and its type-:
premeetive->They can hold only single value,
They are immutable and if the value are assigned once they cant be  change and modified
=>Number,undefiend,null,boolian & String



Non-Premitive->they hold multiple values
they are mutable ex-:Array,function,Object

2=>
    Array->it stores Collection of values having same datatype
Object-:its also stores multiple value for combination of values and function
3
LOOPS
=>for-it allow to iterate block of code in Spacific times
=>while-it allow to iterate block of code if the certain condition is true
=>do-while-it allow to iterate block of code at least once as if the condition is false

4-:for-of & for-in
=>for-of->is used to loop through the value of object like array and String
here we can accesing the values without using its index number
=>for-in->it used to iterate over the properties ofan object
it used for accessing the value of key which is associated with it





let a=[12,56,10,32,52];
let ans=Math.max(...a);
console.log(ans)

    let arr=[1,2,3,33,33,44,44,55,66];
    let ans2=[...new Set(arr)];
    console.log(ans2);

setInterval(()=>{
let pro=new Promise((res,rej)=>{

    setTimeout(()=>{
let num=Math.floor(Math.random()*10);
if(num>5){
    res(`data fetch successfully ${num}`)
}
else{
    rej(`data cant be fatched ${num}`);
}

    },1000)


})
pro.then((ans)=>{
    console.log(ans)
}).catch((err)=>{
    console.log(err)
})
},1000)

class Car{

    constructor(year,model){
        this.year=year;
        this.model=model;
    }
    //Method
    start(){
        console.log(`i love this car ${this.model}`)
    }
}
let ans=new Car(2024,"Hummer-EV")
console.log(ans);
ans.start();


