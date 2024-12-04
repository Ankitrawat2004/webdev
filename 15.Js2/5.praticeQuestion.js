//Qs1. Write a JavaScript program to get the first n elements of an array.
//[n can be any positive number].Forexample:for array[7,9,0,-2] and n=3 
//Print,[7,9,0]
let arr=[7,9,0,-2];
let n =3;
let ans=arr.slice(0,n);//7,9,0
console.log(ans);
//Qs2.Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
//For example:for array[7,9,0,-2] and n=3 Print,[9,0,-2]
let ar=[7,9,0,-2];
 let m =3;
 let anss=ar.slice(ar.length-m);
 console.log(anss);
//Qs3.Write a JavaScript program to check whether a string is blank or not.
let str=prompt("enter the string");
if(str.length==0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

//Qs4.Write a JavaScript program to test whether the character at the given(character)index is lowercase.\
let strr="ApnaCOLLeGe";
let indx=3;
if(strr[indx]==strr[indx].toLowerCase()){
    console.log("caracter is lowercase");
}
else{
    console.log("character is not lowercase");
}
//Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
let st=prompt(" please enter a string");
console.log(`original string ${st}`);
console.log(`string without spaces=${st.trim()}`);


//Qs6.Write a JavaScript program to check if an element exists in an array or not.
let arra =["hello","a",1,2,3,4,6];
let item =4;

if(arra.indexOf(item)!==-1){
    console.log("element exist in the array");
}else{
    console.log("element  does not exist in the array");
}
