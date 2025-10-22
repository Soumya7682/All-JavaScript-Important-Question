function set(){
    setTimeout(()=>{
        console.log("Task1")
    },5000)
    setTimeout(()=>{
        console.log("task2")
    },2000)

}
set();

function set1(){
    setInterval(()=>{
        console.log("Task3")
    },5000)
    setInterval(()=>{
        console.log("task4")
    },2000)

}
set1();

var ans=new Promise((res,rej)=>{
    var n=Math.floor(Math.random()*10);
    console.log("value of n is:" ,n)
    if(n<5){
        return res("Answer aagye")
    }
    else{
        return rej("sale ne reject kar di")
    }
})
ans.then((data)=>{
    // console.log("Answer aagye")
    console.log(data)
}).catch((data)=>{
    // console.log("req reject hogye")
    console.log(data)
})


Task-1,Task-2,task-3,task-4
var p1=new Promise((res,rej)=>{
    return res("task-1");
})
var p2=p1.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("Task-2");
    })
})
var p3=p2.then((data)=>{
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("Task-3")
    })
})
var p4=p3.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
if(false)
        return res("Task-4")
    })
})
p4.then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Task-1 Rejected");
}).catch(()=>{
    console.log("Task-2 Rejected");

})
.catch(()=>{
    console.log("Task-3 Rejected");

}).catch(()=>{
    console.log("Task-4 Rejected");

})


function call(){
    fetch(`https://randomuser.me/api/`).then((raw)=>{
        return raw.json();
        
    })
    .then((data)=>{
        console.log(data);
    })
}
call();


async function fetAsync(){
let raw=await fetch(`https://api.github.com/users/Soumya7682`);
let ans=await raw.json();
console.log(ans)
}
fetAsync();