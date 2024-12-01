//array => linear collection things
 let students = ["aman","ankit","hitesh"];

 let nums=[2,4,6,8,];
 let info=["shradha",23,89,0];//mmixed array
 info[0];
 info[0][0];
 //empty array
 let arr=[];
//arrays are mutable(changable)
let fruits=["mango","apple","litchi"];
fruits[0]="banana";
fruits[10]="papaya";
//array methods
// push:add to end
// unshift:add to start
// pop : delete from end & returns it
// shift : delete from start & returns it
let cars =["audi","bmw","xuv","maruti"];
cars.push("toyota");//add to end
cars.push("ferrari");
cars.pop();//delete from end and return it
cars.pop();
cars.unshift("toyota");//add to start
cars.unshift("ferrari");
cars.shift();// shift : delete from start & returns it
cars.shift();

 //indexof: returns index of something
 let primary =["red","yellow","blue"];
 primary.indexOf("yellow");
 primary.indexOf("green");

 //includes:search for a value
primary.includes("red");//return true
primary.includes("green");//return false

//concat:merge 2 arrays (concatenation)
primary.concat(secondary);
let secondary =["orange","green","violet"];
primary.concat(secondary);

//reverse: reverse an array
primary.reverse();//(blue,yellow,red)

//slice:copies a portion of an array
let colors=["red","yellow","blue","orange","pink","white"];
colors.slice();//("red","yellow","blue","orange","pink","white")
colors.slice(2);//("blue","orange","pink","white")
colors.slice(2,3)//('blue')
colors.slice(-2)//need 2 element from last('pink','white')

//splice:removes/replaces/add elements in place splice(start,deleteCount,itemO..itemN)
colors.splice(4);//pink ,white
colors();//red,yellow,blue,orange
colors.splice(0,1);//red
colors();//yellow,blue,orange
colors.splice(0,1,"black","grey");//yellow delete
colors();//black ,grey,blue,orange

//sort: sorts an array
let days=["monday","sunday","wednesday","tuesday"];
days.sort();

//array references
let arrr=['a','b'];
let arrrCopy=arrr;
arrrCopy.push('c');
arrr();//a,b,c
// arrr=arrrCopy(true)

//constant arrays => stores the address of an given arrrr to constant it can be change

const arrrr=[1,2,3,4]; 
arrrr.push(4);//1,2,3,4
arrrr.pop();//4

//nested arrays=> array of arrays
let numss= [[2,4],[3,6],[4,8]];
numss.length();//3
numss[0];//[2,4]
numss[0].length();
numss[0][0];//it is based 1st array then comes on another array
 

//made an tic tak toe game
let game=[['X',null,'O'],[null,'X',null],['O',null,'X']];

 


