//for loop
for(let i =1;i<=5;i++){
    console.log(i);
}
//print all odd no(1 to 15)
for(let i=1;i<=15;i=i+2 ){
    console.log(i);
}
//print evcven no (2 to 10)
for(let i =2;i<=10;i=i+2){
    console.log(i);
}
console.log("backwards");
for(let i =10;i>=2;i=i-2){
    console.log(i);
}
//infinite loops
for( let i=1;i>=0;i++){

}
for( let i=1;i<=2;i--){

}
for( let i=1; ;i--){

}
//print the multiplication 
 
let n = prompt("write your number");// this ia an string
 n=parseInt(n);
for(let i =n;i<=n*10;i=i+n){
    console.log(i);
}
//nested  for loop
for(let i =1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j =1;j<=3;j++){
    console.log(j);
    }
}
//while loop
let i =1;
while(i<=5){
    console.log(i);
    i++;
}

//my fav movie
const favMovie ="avatar";
let guess = prompt("guess my favorite movie");

while((guess!=favMovie) && (guess!="quit")){

guess = prompt(" wrong guess. please try again");
}
if(guess==favMovie){
    console.log("congrats!!");
}else{
    console.log(" you quit"); 
}
//break keyword => loop execution stop and come outside the loop
let a =1;
while(a<=5){
    if(a==3){
        break;
    }
    console.log(a);
    a++;
}
console.log("we used break at 3");
const favMoviee ="avatar";
let guesss = prompt("guess my favorite movie");

while((guesss!=favMoviee) ){
if(guesss=="quit"){
    console.log("you quit");
    break;
}

guesss = prompt(" wrong guess. please try again");
}
if(guesss==favMoviee){
    console.log("congrats!!");
}else{
    console.log(" you quit"); 
}

//loops with arrays
let fruits=["mango","apple","banana","litchi","orange"];
fruits.push("pineapple");
for(let i =0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
for(let i =fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}
//nested loops with nested arrays
let heroes=[["ironman","spiderman","thor"], ["superman","wpnder woman","flash"]];
for(let i=0; i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j =0;j<heroes[i].length;j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}
let student =[["aman",95],["shradha",94.4],["karan",100]];
for( let i=0; i<student.length;i++){
    console.log(`info of student #${i}`);
    for(let j=0; j<student[i].length;j++){
        console.log(student[i][j]);
    }
}
//for of loop
//for(element of collection){
// do something }
let fruitss=["mango","apple","banana","litchi","orange"];
for(i of fruitss){
    console.log(i);
}
for(char of "apnacollege"){
    console.log(char);
}
//nested for of loop
let heroess=[["ironman","spiderman","thor"], ["superman","wonder woman","flash"]];
for(list of heroess){
    for(hero of list){
        console.log(hero);
    }
}
//Todo App
 let todo =[];

 let req = prompt("please enter your request");
 while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("--------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("--------------");
    }else if(req == "add"){
       let task= prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx=prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req = prompt("please enter your request");

 }