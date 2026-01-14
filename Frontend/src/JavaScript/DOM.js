// Q) append 'for codding'  in h4 using js
let text=document.querySelector("h4");
console.log(`${text.innerText} for codding`) //for consol log only 
text.innerText=text.innerText+" for codding";


// Q) 3 div with class name -box  add some unique text using js  
text=document.querySelectorAll(".box");
text[0].innerText="new div1";
text[1].innerText="new div2";
// text[2].innerText="list";

let newHeading = document.createElement('h1');
newHeading.innerText="I am new heading.";
// document.querySelector("body").prepend(newHeading);
document.querySelector("body").after(newHeading);
 