//call stack => store the fn calls
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    return two()+one();
    console.log(ans);
}
//synchronus nature
let a =25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);
//Js is an single threaded
//Asynchornous nature
setTimeout(()=>{
    console.log("apna college");
},2000);
console.log("hello...");

h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        nextColorChange();
    },delay);
  
}

changeColor("red",1000, ()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000);
        });
    });
});
//callbacks nesting => callback hell

function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
       success();
    }else{
   failure();
}}

 savetoDb("apna college",()=>{
    console.log("success: your data was saved:");
    savedtoDb("hello world",()=>{
        console.log("success2: data2 saved");
        savetoDb("ankit",()=>{
          console.log("success3: data3 saved");  
        },()=>{
            console.log("failure3: weak connection");
        });
    },()=>
    {
        console.log("failure2 :weak connection");
    });
 },
()=>{
    console.log(" failure: weak connection. data not saved");
 }
);
//promises
// the promise object represents the eventual completion (or failure) of an asynchrounus operaton and ist resulting value.
// resolve & reject
function savetoDb(data){
    return new Promise((resolve,reject)=>{
            let internetSpeed = Math.floor(Math.random()*10)+1;
            if(internetSpeed>4){
                resolve("success:data was saved");
            }else{
                reject("failure:weak connection");
            }
    });
}

//then() & catch()
let request = savetoDb("apnacollege");//req =promise object
console.log(request);
request.then(()=>{
    console.log("promise was resolved");
    console.log(request);
})
.catch(()=>{
console.log("promise was rejected");
console.log(request);
});

//promises chaining(improved version)
savetoDb("apnacollege")//req =promise object
.then(()=>{
    console.log("promise1 resolved");
    return savetoDb("helloworld");
})
    .then(()=>{
        console.log("promise2 resolved");
    })

  .catch(()=>{
console.log("promise was rejected");
});
//promises are rejected and resolved with some data (valid results or errors)

savetoDbPromise("apnacollege")//req =promise object
.then((result)=>{
    console.log("result of promise:",result);
    console.log("promise1 resolved");
    return savetoDbPromise("helloworld");
})
    .then((result)=>{
        console.log("result of promise:",result);
        console.log("promise2 resolved");
    })

  .catch((error)=>{
    console.log("error of promise:",error);
console.log("Some promise rejected");
});
