let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
});

let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    // console.log("key =", event.key);//key what we pressed 
    // console.log("code =",event.code);
    // console.log("key was pressed");
    console.log("code = ", event.code);//Arrowup,Arrowdown,Arrowleft,ArrowRight
    if(event.code=="ArrowUp"){
        console.log("chracter moves forward");
    }else if (event.code=="ArrowDown"){
        console.log("chracter moves backward");
    }else if (event.code=="ArrowLeft"){
        console.log("chracter moves left");
    }else if (event.code=="ArrowRight"){
        console.log("chracter moves right");
    }
});
inp.addEventListener("keyup",function(){
    console.log("key was pressed");
});

//form event
let form =document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();// this mehtod use to stop the action which go to another page
    alert("form submitted");
});
//extracting from data
form.addEventListener("submit",function(event){
// event.preventDefault();
// let user =document.querySelector("#user");
// let password =document.querySelector("#pass");
// let inp =document.querySelector("input");
 console.dir(inp);

console.dir(form);
form.elements;
let user=this.elements[0];//form.elements[0]
let pass=this.elements[0];

console.log(user.value);
console.log(pass.value);
console.log(inp.value);

alert(`Hi ${user.value},your password is set to ${pass.value}`);

});

//more events
//change events => change event track the value of an element changed.
// this only works on <input>,<textarea>and <select>elements.
//input event => this event fires when the value of an <input>,<select>,<textarea>elements hasbeen changed.

let user=document.querySelector("#user");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value= ",this.value);
});
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value= ",this.value);
});

let inpp = document.querySelector("#text");
let p =document.querySelector("p");
inpp.addEventListener("input",function(){
console.log(inpp.value);
p.innerText=inpp.value;
});