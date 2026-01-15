// Task for hands on dom manipulation (Common for both)
// Create a counter app.
// Starts from 0.
// Provide increase, decrease, and reset buttons.
// Set a minimum limit of 0.
// Optional - (if you can achive this , it would be great - disable decrease when value is 0)

let count=0;
let direction=1;
let interval=null;
let running=true;

const startbtn =document.querySelector("#start");
const backbtn =document.querySelector("#back");
const stopbtn =document.querySelector("#stop");
const resetbtn =document.querySelector("#reset");
const Counter =document.querySelector("#Counter");

resetbtn.addEventListener("click",()=>{
    count=0;
    Counter.innerHTML=`Counter : ${count}`;
    running=false;
    clearInterval(interval);
})

stopbtn.addEventListener("click",()=>{
    running=false;
    clearInterval(interval);
});


startbtn.addEventListener("click",()=>{
    console.log("working");
    running = true;
    direction=1;
    interval = setInterval(() => {
        if(direction===1 && running===true){
            count++;
            Counter.innerHTML = `Counter : ${count}`;
        }
  }, 1000); 
})


backbtn.addEventListener("click",()=>{
    console.log("working");
    running = true;
    direction=-1;
    interval = setInterval(() => {
        if(count<=0){
            return console.log("Already zero.");             
        }else if(count>0 && direction === -1 && running===true){
            count--;
            Counter.innerHTML = `Counter : ${count}`;
        }
    }, 1000);
})
