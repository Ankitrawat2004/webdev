//function in js
function printName(){
    console.log("ankit");
}
printName();
function isAdult(){
    let age=18;
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}
isAdult();
//pratice qs
//create a fn to create a dice(1 to 6)

function rollDice(){
    let random=Math.floor(Math.random*6)+1;
console.log(random);
}
rollDice();
//function with arguments
//values we pass to the function
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("ankit",21);
function sum(a,b){
    console.log(a+b);
}
sum(1,2);
//pratice qs 
function calcAvg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
calcAvg(2,4,6);

//quest 2
function printTable(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
printTable(2);
//return
// return keyword is used to return some value from the function
function sum(a,b){
    return a+b;
}
let s=sum(sum(1,2),3);
console.log(s);

// fn return sum of no 1 to n 
function getSum(n){
    let sum=0;
    for(let i =1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

//fn return the concatenation of all string in an array
let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result=result+str[i];
    }
    return result;
}

//scope => it is determines the accessibility of variables,objects,and fucntion from different parts of code.
//function=>variable defined inside a fn are not accessible from outside the fn.
let sum=34;//global scope
function calsum(a,b){
    let sum=a+b;
}
calsum(1,2);
console.log(sum);
//it show error beacuse sum variable is created inside the fn.

//block=> variables declared inside a {}block cannot be accessed from outside the block.
{
    let a=24;
    var v=34;
}console.log(a);//it show error but if we use var then its print value.
//global
//lexical scope=>a variable defined outside a fn can be accessible inside another fn defined after the variable declaration.

    function outerFunc(){
        let x=5;
        let y=6;
        function innerFunc(){//fn scope
            console.log(x);
        }
        console.log(a);
        innerFunc();
    }

let greet="hello";
function changeGreet(){
    let greet="namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
}
console.log(greet);
changeGreet();

//function expressions
let name="aman";
const sum=function(a,b){
    return a+b;
}
sum(2,3);
let hello=function(){
    console.log("hello");
}
hello=function(){
    console.log("namaste");
}
//higher order fn
// a function that does one or both:
// takes one or multiple fn as argumnets
// returns a function
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greett =function(){
    console.log("hello");
}
multipleGreet(greett,2);


function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}
let request ="odd";
let funcc = oddOrEvenFactory(request);

//methods=>actions that can be performed on an object
const calculator={
    add:function(a,b){//add(a,b){ return a+b;}
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
