//js objects literals
//used to store keyed collections & complex entities.
//property=>(key,value)pair
//objects are a collection of properties
const student={
    name:"ankit",
    age:23,
    marks:94.4
};
const item={
    price:100.99,
    discount:50,
    colors:["red","pink"]
};

//create a thread/twitter post
const post={
    username:"@ankitrawat",
    content:"this is my #firstPost",
    likes:150,
    reposts:5,
    tages:["@apnacollege","@delta"]
};

//get values
//js automatically converts objects keys to strings.
//even if we made the number as akey,the number will be convertes to string.

post ["content"];
post["likes"];
post.content;

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
//add/update value
const studentt={
    name:"ankit",
    age:23,
    marks:94.4,
    city :"Delhi"
};//change city to mumbai
studentt.city
studentt.city="mumbai";
studentt.gender="female";
studentt.marks="A";
studentt.marks=[99,90,74];
delete studentt.marks;
//object of objects
//storing information of multiple students
const classInfo={
    aman:{
        grade:"A+",
        city:"Delhi"
    },
    shradha:{
        grade:"A",
        city:"Pune"
    },
    karan:{
        grade:"O",
        city:"Mumbai"
    }
}
classInfo.aman
classInfo.shradha.city="gurgoan";

//array of objects
//storing information of multiple students
const classInfo=[
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"shradha",
        grade:"A",
        city:"Pune"
    },
    {
        name:"karan",
        grade:"O",
        city:"Mumbai"
    }
]
classInfo[0]
classInfo[1].name
classInfo[2].city="ghaziabad";

//math object
//properties
Math.PI
Math.E
//methods
Math.abs(12);//12
Math.pow(2,4);//16
Math.floor(5.5);//round of value 5 nearest smallest int value roundoff
Math.ceil(6.10);//7 larger int value roundoff
Math.random();//gave value between 0 to 1 but  no include 1

//random integers(from 1 to 10)
let num=Math.random();
//step:2
 num=num*10;//we multiple by 10 because we want to genrate a number from range 1 to 10
///step:3
num=Math.floor(num);//4 nearest smallest no roundoff
//step:4
num=num+1;//5

//generate a random number between 1 to 100
Math.floor(Math.random()*100)+1

//guessing game
//user enter a max number & then tries to guess a random genreated no between 1 to max.
const max=prompt("enter the max number");

const random = Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess== random){
        console.log("you are right!congrats!! random no was",random);
        break;
    }else if(guess<random){
       guess= prompt("your guess was too small . plx try again");
    }
    else {
        guess= prompt("your guess was too large . plx try again");
     }
    
  

}
console.log(max);
