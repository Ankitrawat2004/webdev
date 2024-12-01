//array methods
//for each
let arr=[1,2,3,4,5];
let print = function(el){
    console.log(el);
 };
 arr.forEach(print);
 arr.forEach(function(el){
    console.log(el);
 });

 let arr1=[{name:"aman", marks:95

 },
 {name:"sharadha",
    marks:97.5,
 },
 {name:"rajat",
    marks:92,
 },
];
arr1.forEach((student)=>{
    console.log(student.marks);
}
)
//map
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});
let students=[
    {
        name:"aman",
        marks:95
},
{name:"sharadha",
   marks:97.5,
},
{name:"rajat",
   marks:92,
},
];
let gpa=students.map((el)=>{
    return el.marks/10;
});
//filter fn provide us a new array
let nums=[1,2,3,4,7,8,,2,10,12,11];
let ans = nums.filter((el)=>{
    return el%2==0;
});

//every=> returns true  if every element of array gives true for some functions.else return false.
let arr2=[1,2,3,4];
arr2.every((el)=> el%2==0);//false

//reduce=> reduces the array to a single value
let numss=[1,2,3,4];
let finalVal=numss.reduce((res,el)=>{
    console.log(res);
   return res+el;
});//res=>accumulator is used to store the value of an earlier level
console.log(finalVal);

let arr3=[1,4,2,5,6,7,2,9,2];
let max = -1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);

let maxx=arr.reduce((maxx,el)=>{
    if(maxx<el){
        return el;
    }else{
        return maxx;
    }
});
console.log(maxx);

//check all no in array are multipple of 10
let num1=[10,20,30,40];
let ans1= num1.every((el)=>el%10==0);
console.log(ans);

//create a fucntion to find the minimum in array
let num2=[10,20,30,40];
function getMin(num2){
    let min=num2.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}
//default parameters=> giving a default value to the arguments
//default paramters used in end
function sum(a=2,b){
    return a+b;
}
sum(1,3);//4
sum(1);//a=1,b=undefined

//spread=>expands an iterable into multiple values
let arr4=[1,2,3,4,1,2,3,0,1,2,3];
Math.min(...arr4);
Math.max(...arr4);
console.log(arr4);
console.log(...arr4);
console.log("apnacollege");
console.log(..."apnacollege");

//spread with array literals
let arr5=[1,2,3,4,5];
let newArr=[...arr5];
let chars=[..."hello"];
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let numsss=[...odd,...even];

//spread with object literals
const data={
    email:"ironman@gmail.com",
    password:"abcd",
};
const dataCopy={...data,id:123,country:"india"};
let arr6=[1,2,3,4,5];
let obj1={...arr};//obj->key:val(here key are index )
let obj2={..."hello"};

//rest => allows a fn to take an indefinite number of arguments and bundle them in an array
function sum(...args){//arguments
for(let i=0;i<args.length;i++){
    console.log("you gave us:",args[i]);
}
}

function min(){
    console.log(arguments);
    console.log(arguments.length);
}
function sum(...args){//rest collect all arguments value in form of array and then we use array methods
   return  args.reduce((sum,el)=>sum+el);
}
function minn(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
}
//destructuring=> storing values of array into multiple variables
let names=["tony","bruce","peter","steve","abc"];
// let winner=names[0];
// let runnerup=names[1];
// let SecondRunnerup=names[2];
let[winner,runnerup,SecondRunnerup,...others]=names;

//destructuring objects
const student1={
    name:"shradha",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"];
    username:"karan@123",
    password:"abcd",
};
// let username=student.username;
// let password=student.password;
let{username:user,password:secret,city="Mumbai"}=student1;
let {}