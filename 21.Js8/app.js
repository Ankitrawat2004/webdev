//DOM(Documnet object model)
// the DOM represents a document with a logical tree.
//it allows us  to manipulate webpage conetent (HTML elements)
console.dir(documnet);// to print document object
console.dir(documnet.all);//HTMLALLCollection()
console.dir(documnet.all[8]);
console.dir(documnet.all[8].innerText);//(spiderman)
documnet.all[8].innerText="peter parker";

//selecting elements => getElementById
//returns the element as an object or null(if not found)
document.getElementById("mainImg");
let imgObj=document.getElementById("mainImg");
console.dir(imgObj);
imgObj.scr
imgObj.tagName

//getElementByClassName
//returns the elements as an TML Collection or empty collection(if not found)
document.getElementsByClassName("oldImg");
document.getElementsByClassName("oldImg")[0];
let smallImages=document.getElementsByClassName("oldImg");
for( let i =0;i<smallImages;i++){
    console.dir(smallImages[i].src="assets/spiderman_img.png");
    console.log(`value of image no.${i}is cahnged`);
}

//getElementByTagName => returns the elements as an HTML collection or empty collection
document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText="abc";

//query selectors => allows us to use any CSS selector
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
document.querySelectorAll("p");//selects all p elements

//using properties & methods
// innerText (shows the visible text contained in a node)
//textContent (shows all the full text)hidden
//innerHTML (shows the full markup)
let para = document.querySelector('p');
console.dir(para);
para.innerText="hi , iam peter Parker!";
para.innerHTML="hi , iam <b>peter Parker</b>!";
let heading = document.querySelector('h1');
heading.innerHTML="<u>Spider Man</u>";
heading.innerHTML=`<u>${heading.innerText}</u>`;

//manipulating attributes
//obj.getAttribute(attr)
//objsetAttribute(attr,val)
let img=document.querySelector('img');
img.getAttribute('id');
img.setAttribute('id','spidermanImg');
img.setAttribute('src',"assets/creation_1.png");

//manipulating style => style property
 let imgg = document.querySelector('img');
 console.dir(img);
 img.style;

 let heading=document.querySelector('h1');
 heading.style;
 heading.style.color='purple';
 heading.style.backgroundColor='yellow';

 let links = documnet.querySelectorAll(".box a");
 for(let i =0;i<links.length;i++){
    links[i].style.color="purple";
 }

 //manipulating style using classlist 
 let headingg = document.querySelector('h1');
 headingg.classList;
 headingg.classList.add("abc");
 headingg.classList.add('green');
 headingg.classList.add('underline');
 headingg.classList.remove('green');
 classList.conatins()//to check if class exists
 headingg.classList.contains("underline");
 classList.toggle()//to toggle between add & remove
 headingg.classList.toggle("underline");
 let box=document.querySelector(".box");
 box.classList;
 box.classList.add("yellowbg");


 //navigation => parentElement,children,previousElementSibling/nextElementSibling
 let h4 = document.querySelector('h4');
 h4.parentElement;
box = documnet.querySelector('.box');
box.children;
box.childElementCount;

let ul = document.querySelector('ul');
ul.parentElement;
ul.childElementCount;
ul.children;
ul.children[0];
ul.children[1];
ul.children[2];
ul.children[2].previousElementSibling;
ul.children[1].nextElementSibling;

let img1 = document.querySelector('img');
img.previousElementSibling;
img.previousElementSibling.style.color="green";

//adding elements => document.createElement('p')
document.createElement('p');
let newP=document.createElement('p');
console.dir(newP);
newP.innerText="Hi, I am a new p";
let body = document.querySelector('body');
body.appendChild(newP);

let btn =document.createElement('button');
console.dir(btn);
btn.innerText="click me!";
box.appendChild(btn);
// 1. first we create the element
// 2. second we insert the entire content of the document are moved into the child list of the specified parent node.
 //3. append function use to add some changes on any elemnts at the last
 newP.append("this is new text");
 //4. prepend fn add some changes at the beginning
 box.prepend(newP);
 //5. insertAdjacentElement(where,element) 
 // it has 4 position: beforebegin,afterbegin,beforeend,afterend
let btnn=document.createElement('button');
btnn.innerHTML="NEW BUTTON!!";
let p =document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);

//removing elements
body.removeChild(btn);
btn.remove();

//pratice question
let para1 = document.createElement("p");
para1.innerText="Hey i am red!";
document.querySelector("body").append(para1);
para1.classList.add('red');
let h3 = document.createElement("h3");
h3.innerText="Hey i am blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");
h1.innerText="I'm in a div";
para2.innerText="ME TOO!";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);