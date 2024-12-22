//API
//Application Programming Interface
 
//JSON => Javascript Object Nation www.json.org
//JSON have no undefinied value
//JSON data always come on string

//JSON => JSON.parse(data)Method
// To parse a string data into JS object
let jsonRes ='{"fact":"Tylenol and chocolate are both poisionous to cats.","length":50}';
console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
console.log( validRes);
console.log( validRes.fact);
//JSON.stringify(json)Method
//to parse a JS object data into JSON
let student={
    name:"ankit",
    marks:50
};
JSON.stringify(student);
console.log(JSON.stringify(student));
//Ajax
//Asynchronous Javascript and XML
//Http Verbs
//GET,POST,DELETE

//STATUS CODES
//200-OK
//300-REDIRECTION MSG
//404-NOT FOUND
//400-BAD REQUEST
//500-INTERNAL SERVER ERROR

//Add Information in URL
//https://www.google.com/search?q=harry+porter
//(here q=key and harry+porter=value)

let url = "https://catfact.ninja/fact";
fetch(url)
//fetch method return a promise
.then((res)=>{
    console.log(res);
    //console.log(res.json());this fn create data readable
    return res.json();
})
.then((data)=>{
    console.log("data1 = ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2 = ",data2.fact);
})
.catch((err)=>{
    console.log("ERROR - ",err);
});

//using fetch with async and await
async function getFacts(){
    try{
        let res= await fetch(url);
        let data =await res.json();
        console.log(data.fact);
    }catch(e){
        console.log("error - ",e);
    }
}
