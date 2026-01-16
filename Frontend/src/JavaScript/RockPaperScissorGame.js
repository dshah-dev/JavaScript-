
let userscore=0;
let computerscore=0;

const choice =document.querySelectorAll("button");
const msg =document.querySelector("#msg");
const DisplayUserScore=document.querySelector("#user-score");
const DisplayCompurterScore=document.querySelector("#computer-score");
const computerchoice= ()=>{
    const compchoice=["Rock","Paper","Scissor"];
    const idx=Math.floor(Math.random()*3);
    return compchoice[idx];
}

const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerHTML="You won";
        userscore++;
        DisplayUserScore.innerHTML=userscore;
    }else{
        console.log("you lose");
        msg.innerHTML="You lose";
        computerscore++;
        DisplayCompurterScore.innerHTML=computerscore;
    }
} 

const playGame=(choiceId)=>{
    console.log("User choice:",choiceId);
    const compchoice=computerchoice();
    
    if(choiceId==compchoice){
        console.log("Draw");
        msg.innerHTML="Draw";
    }else{
        let userwin=true;
        if(choiceId=="Rock"){
            userwin=compchoice==="Paper" ? false:true;
        }else if(choiceId=="Paper"){
            userwin=compchoice==="Scissor" ? false:true;
        }else{
            userwin=compchoice==="Rock" ? false:true;
        }
        showwinner(userwin);
    }
}

choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{
    const choiceId = ch.getAttribute("id");
    playGame(choiceId);
    });
});
