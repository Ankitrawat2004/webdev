console.log("Hello World!");
let a=10;
let b=5;
console.log("sum is:",a+b);

//Template literals
//they are used to add embedded expressions in a string.
//let a =5;
//let b=10;
console.log("your pay $(a+b) rupees");
//console.log("Price is",a+b,"rupees");
let pencilPrice=10;
let eraserPrice=5;
console.log("The total price is: ",pencilPrice + eraserPrice, "Rupees.");
let output=`The total price is :${pencilPrice} Rupess.`;//back tick
console.log(output);
//comparison operators
//1.== compares value,not type
//"123" == 123(true)
//1=='1'(true) 0 == ''(true)
// 0== false(true)
//null== undefined (true)

//2. === compares type& value
//"123" === 123
//1==='1'(false) 0===''(false) 0===false(false)


//conditional Statements
console.log("before my if statement");
let age = 23;
if(age>=18){
    console.log("you can vote")
    console.log("you can drive");
}
if(age<18){
    console.log("you cannot vote");
}
console.log("after my if statements");

//Question create a traffic light syytem that show what to do based on color.
let trafficLight = "red";
if(trafficLight=="red"){
    console.log("stop your vehicle");
}
if(trafficLight=="yellow"){
    console.log("slow down your vehicle");
}
if(trafficLight=="green"){
    console.log("you can run your vehicle");
}
let age1 = 23;
if (age1 >=18){
    console.log("you can vote");
}else if(age>=18){
    console.log("you cannot vote")
}else{
    console.log("traffic light is broken");
}

let marks=33;
if(marks>=80){
console.log("A+");
}else if(marks>=60){
    console.log("A")
}else if(marks>=33){
    console.log("B");
}else if (marks<33){
    console.log("F");
}
 let month="january";
if(month=="january"){
    console.log("winter is here");
}else if(month=="april"){
    console.log("summer is here");
}

//create a system to calculate popcorn priced bazed on the size customer asked for:
let size="XL";
if(size === "XL"){
    console.log("price is RS.250");
}else if(size === "L"){
    console.log("price is RS.200");
}else if(size === "M"){
    console.log("price is RS.100");
}else{
console.log("price is RS.50");
}

//nested if-else
// nesting is writing if-else inside if-else statements.it can have many levels.

let mark = 45;
if(mark>=33){
    console.log("Pass");
    if(mark>=80){
        console.log("Grade : O");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("Better luck next time!");
}
//logical operators
//logical operators to combine expression
let str ="apple";
if(str[0]==="a" && str.length>3){
    console.log("good string");
}else{
    console.log("not a good string");
}
//truthy $ false
// everything in Js is true or false (in boolean context)
//this doesn't mean thier value itself is false or true,but they are treated as false or true if taken in boolean context.

//falsy values
//false,0,-0 , On(bright value),""(empty tring),null,undefined,NaN

//truthy values
//everything else
if(true){
    console.log("it has true value");
}else{
    console.log("it has false value");
} 
let num=0;

 if(num){
    console.log("num is not equal to 0");
 }
else{
    console.log("num is equal to 0");
}
//switch statement => used when we have some fixed values that we need to compare to.
let color= "red";
switch(color){
    case "red": console.log("stop");
    break;
    case "yellow":console.log("slow down");
    break;
    case "green" : console.log("GO");
    break;
    default : 
    console.log("Broken Light");
}
let day =1;
switch(color){
    case 1: console.log("monday");
    break;
    case 2 :console.log("tuesday");
    break;
    case 3 : console.log("wednesday");
    break;
    case 4 : console.log("thursday");
    break;
    case 5 : console.log("friday");
    break;
    case 6 : console.log("saturday");
    break;
    case 7 : console.log("sunday ,fun day");
    break;
    default : 
    console.log("wrong day");
}
//alert & prompt
//alert displays an alert message on the age.
//alert("something is wrong!");
alert("something is wrong"); 
console.warn("this is a warning msg");
console.error("this is an error msg");

//prompt displays a dialog box that asks user for some input.
prompt("please enter your roll no.");
let Name = prompt("enter your name.");
console.log(Name);

let FirstName = prompt("enetr  your first name:");
let LastName = prompt("enter your last name:");
console.log("welcome",FirstName, lastName, "!");
let msg="welcome" +FirstName +" "+LastName+"!";
alert(msg);