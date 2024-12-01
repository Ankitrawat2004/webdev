//string methods
//methods= actions that can be performed on objects.
// format => stringName.method();
// 1. str.trim()
// trims whitespaces from both ends of string & retuns a new one.
let msg = "  hello  ";
console.log(msg);
msg.trim();

// string are immutable in JS
// no changes can be made to strings.
// whenever we do try to make a change , a new string is created and old one remains same.\
let msg1="apnacollege  ";
msg1.trim();
let str= msg1.trim();

//string methods with arguments
// argument is a some value that we pass to the method.
// format => stringName.method(arg)

//indexOf => returns the first index of occurrence of some value in string. or gives -1 if not found.
// let str="IloveCoding";
// str.indexOf("love"); //1
// str.indexOf("J"); //-1 not found
// str.indexOf("o"); //2 (only 1 index)

//method chaining
//using one method after another .order of execution will be left to right.
//str.toUpperCase().trim()
let msg2="  hello  ";
//let newMsg2 = msg2.trim();
//console.log("after trim:",newMsg2);
//newMsg2 = newMsg2.toUpperCase();
//console.log("after uppercase :",newMsg2);

let newMsg2 = msg2.trim().toUpperCase();
console.log(newMsg2);

//slice
//returns a part of the original string as a new string.
//let str= "IloveCoding";
//str.slice(5)
//str.slice(1,4)

console.log(msg.slice(0,4));
console.log(msg.slice(-3));

//replace 
//searchs a value in the string & returns a new string with the value replaced.
//let str="IloveCoading";
//str.slice("love","do");
let stri="IloveCoading";
 let stri2= stri.replace("love","song");
 console.log(stri2);

 //repeat
 //returns a string with the number of copies of a string
 //let str="mango";
 //str.repeat(3); 
 
//