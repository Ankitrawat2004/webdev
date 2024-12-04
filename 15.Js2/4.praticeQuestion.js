// ans 1
//Create an umber variable num with somevalue.
//Now , print “good” if the number is divisible by 10 and print “bad” if it is not
let num =20;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}
//Qs2.Take the user's name & age as input using prompts.
//Then return back the following statement to the user as an alert(by substituting their name & age):name is age year sold
let name= prompt("please enter your name");
let age=prompt("please enter your age");
alert(`${name} is ${age} year old`);

//Q3
let quarter=1;
switch(quarter){
    case 1:console.log("january, feburary, march");
    break;
    case 2:console.log("april,may ,june");
    break;
    case 3:console.log("july,august,september");
    break;
    case 4:console.log("october,november,december");
    break;
    default:("not a quarter!");
}
//Qs4.A string is a golden string if it starts with the character‘A’or‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
let str="apples";
if((str[0]=='a'||str[1]=='A') && (str.length>5)){
    console.log(" golden string");
}else{
    console.log("not a golden string");
}
//Qs5.Write a program to find the largest of 3 numbers
let a =2;
let b=3;
let c=10;
if(a>b){
    if(a>c){
    console.log(a,"is largest"); 
    }else{
        console.log(c,"is largest"); 
    }
}else{
    if(b>c){
        console.log(b,"is largest"); 
    }else{
        console.log(c,"is largest");
    }
}
//Q6 (Bonus).Write a program to check if 2 numbers have the same lastdigit.Eg:32 and 47852 have the same lastdigit i.e.2
let number = 32;
let number1= 47852 ;
if((number%10)==(number1%10)){
    console.log("numbers have the same last digit  which is",number%10);
}else{
    console.log("number dont have the same last digit");
}