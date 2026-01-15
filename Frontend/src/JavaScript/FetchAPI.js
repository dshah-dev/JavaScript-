// Task: @Dhaval Shah 
// https://jsonplaceholder.typicode.com/users
// Fetch a user list from the public API and display each user’s name and email on the page by using - 
// Callback 
// Promise 
// Async/Await
// Create three buttons for all these methods like load users by callback, promise and async await
// Create one reset button to reset the data

const url = 'https://jsonplaceholder.typicode.com/users';
const para=document.querySelector("#para");
const callbackBtn =document.querySelector("#callbackBtn");
const promiseBtn =document.querySelector("#promiseBtn");
const asyncBtn =document.querySelector("#asyncBtn");
const reset =document.querySelector("#reset");


reset.addEventListener("click", () => {
  para.innerHTML = "Nothing here";

});


const getdata1 = async()=>{
    para.innerHTML="";
    console.log("getting data");
    let res =await fetch(url);
    console.log(res);
    let data = await res.json();
    data.forEach(e => {
        const p = document.createElement("p");
        p.textContent=`Name : ${e.name} Email : ${e.email}`;
        para.appendChild(p);
    });
} 

asyncBtn.addEventListener("click",getdata1);


// Using Promise

function getdata2(){
    para.innerHTML="";
    fetch(url).then((res)=>{
      // const data = res.json();
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      data.forEach(e => {
        const p = document.createElement("p");
        p.textContent=`Name : ${e.name} Email : ${e.email}`;
        para.appendChild(p);
      
      });
      })
}

promiseBtn.addEventListener("click",getdata2);


// using callback
function hendleData(data){
  data.forEach(e => {
        const p = document.createElement("p");
        p.textContent=`Name : ${e.name} Email : ${e.email}`;
        para.appendChild(p);
    });
}
function getdata3(){
  para.innerHTML="";
    fetch(url)
    .then(res=>res.json())
    .then(data => hendleData(data))
}

callbackBtn.addEventListener("click",getdata3);
