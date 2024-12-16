 let div =document.querySelector("div");
let ul =document.querySelector("ul");
 let lis =document.querySelector("li");
 div.addEventListener("click",function(){
     console.log("div was clicked");
 });
    //in nested loops if there one event trigger it trigger all parent elemnt and child to stop this we use stoppropagation.
 ul.addEventListener("click",function(event){
     event.stopPropagation;
     console.log("ul was clicked");
 });
 for(li of lis){
    li.addEventListener("click",function(event){
       event.stopPropagation;
         console.log("li was clicked");
     });
 }

let btn = document.querySelector("button");
let ull =document.querySelector("ul");
let inp = document.querySelector("input");
 btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
     
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ull.appendChild(item);
    inp.value="";
 });

 ul.addEventListener("click",function(event){
 if(event.target.nodeName =="BUTTON"){//event.target tell by pressing whose button its get target
   let listItem= event.target.parentElement;
   console.log(listItem);
   listItem.remove();
    console.log("delete");
 }
});
//event delegation
// it means for an  new elemnts old eventlistener not apply in new elements
//but if we want to add eventlistener to new element so we use event delegation
//event delegation is type of pheonemana in which we use (bubbling property)


