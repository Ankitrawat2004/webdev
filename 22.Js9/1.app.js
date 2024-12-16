//DOM Events
//events are signals that something has occured.

//onclick(when an element is clicked)
//onmouseenter(when mouse enters an element)
let btns= document.querySelectorAll("button");

for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("you entered a button");
    }
    console.dir(btn);
}
// console.dir(btn);
// btn.onclick=function(){
//     console.log("button was clicked");
// }
function sayHello(){
    alert("hello!");
}
function sayName(){
    alert("apna college");
}
//btn.onclick=sayHello;

//event listener => addEventListener
//element.addEventListener(event,callback)
for(btn of btns){
   btn.addEventListener("click",sayHello);
   btn.addEventListener("click",sayName);
   btn.addEventListener("dblclick",function(){
    console.log("you double clicked me!")
   });
}