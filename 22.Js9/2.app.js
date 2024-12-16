let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomcolor=getRandomColor();
    h3.innerText= randomcolor;
    let div =document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    console.log("color updated");
});
function getRandomColor(){
    let red =Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color= `rgb(${red},${green},${blue})`;
    return color;
}
let  p =document.querySelector("p");
p.addEventListener("click",function(){
console.log("parah was clicked!");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});
//this in event Listeners
// when this is used in a callback of event handler of something,it refers to that something.
let btn1 = documenty.querySelector("button");
btn1.addEventListener("click",function(){
    console.log(this);//click me
    console.dir(this);//button
    console.dir(this.innerText);//click me
    this.style.backgroundColor="blue";//click me (blue)backgroundcolor

})
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btn1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);

