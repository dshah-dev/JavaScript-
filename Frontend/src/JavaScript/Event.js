let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    btn.innerText="Text changed";
})

btn.addEventListener("keydown",()=>{
    btn.innerText="Submit";
    console.log("working")
})


// dark mode
let newbt=document.querySelector("#mode");
let body=document.querySelector("body");
let mode='white';
newbt.addEventListener("click",()=>{
    if(mode==='white'){
        mode='black';
        body.style.backgroundColor="black";
        newbt.style.backgroundColor="white";
    }else{
        mode='white';
        body.style.backgroundColor="white";
    }
    console.log("working");
})
