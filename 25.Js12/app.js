//Async Functions => return a promise
//async & await keywords
// async function greet(){
//     return "hello world!";//returns a promise
// }
//throw keyword is used to through the errors
async function greet(){
    // throw "some random error";
    return "hello world!";//returns a promise
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was:",result);
})
.catch((err)=>{
    console.log("promise was rejected with err:",err);
});
//  let demo =async()=>{
//     return 5;
//  };//returns a promise

 //await Keyword
 //pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)
 function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000); 
    });
 }
 async function demo(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
 }
 //handling rejections with await => by using try and catch

 h1 = document.querySelector("h1");
function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num =Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected " + num);
            }
            h1.style.color=color;
            console.log(`color changed to${color}!`);
            resolve("color changed!");

        },delay);
    }); 
}
async function demoo(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        let a=5;
    }catch(err){
        console.log("err caught");
        console.log(err);
    }

    let a=5;
    console.log(a);
    console.log("new number:",a+3);
}