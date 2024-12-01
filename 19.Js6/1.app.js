//this keyword refers to an object thagt is executing the current piece of code.

const student={
    name:"ankit",
    age:21,
    eng:91,
    math:89,
    phy:80,
    getAvg(){
        //this is an calling object
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name}got avg marks=${avg}`);
    }
}
//try & catch
// the try statement allows you to define a block of code to be tested for errors while it is being executed.
// the catch statement allows you to define a block of code to be executed if an error occurs in the try block.
try{
    console.log(a);
}catch(err){
    console.log("caught an error a is not define");
    console.log(err);
}
//miscellaneous topics
//arrow functions
const sum=(a,b)=>{
    console.log(a+b);
};
const cube=(n)=>{
    return n*n*n;
};
const pow=(a,b)=>{
    return a**b;
};
const hello=()=>{
    console.log("hello world");
};
//implicit return in arrow function
const mul =(a,b)=>a*b;

//set timeout
 console.log("hi there!");
 setTimeout(()=>{
    console.log("apna college");
 },4000);
 console.log("welcome to ");

 //set interval (multiple time execute loop)
 console.log("hi there!");
 let id =setInterval(()=>{
    console.log("apna college");
 },2000);
 console.log(id);
 console.log("welcome to ");
 // to stop the set interval we use (clearInterval(id) this will stop the setinterval)

 //this with arrow functions
  //function scope->this >calling object
//arrow function->lexical scope->this > parent  this
const students={
    name:"aman",
    marks:98,
    prop:this,//global scope
    getName:function(){
        console.log(this);//student object
        return this.name;
    },
    getMarks:()=>{
        console.log(this);//parent scope this is arrow fn this
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student object
        },2000);

    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);//window
        },2000);

    }
};
//writa an arrow fn that return square of n
const square=(n)=>n*n;
console.log(square(4));

// write a fn that prints hello world 5 times at intervals of 2s each.
 let id3=setInterval(()=>{
    console.log("hello world");
},2000);
setTimeout(()=>{
    clearInterval(id3);
    console.log("clear interval ran");
},10000);

