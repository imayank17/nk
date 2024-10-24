let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userScore=document.querySelector("#uscore");
let compScore=document.querySelector("#cscore");
let resetBtn=document.querySelector("#reset-button");
let comptext=document.querySelector(".comptext");
let usertext=document.querySelector(".usertext");
let userscore=0;
let compscore=0;


//adding event listener to each choice
choices.forEach((choice)=>{
    choice.addEventListener("click",function(){
        console.log("choice is clicked");
        let userChoice=choice.getAttribute("id");
        console.log("user has clicked on",userChoice);
        usertext.innerText=`User : ${userChoice}`;
        usertext.classList.add("style");
        comptext.classList.add("style");
    
        playGame(userChoice);
    })
})
//getting computerChoice

function getCompChoice(){
    let options=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}

//actual game starts in which choices will be compared
function playGame(userChoice){
      let compChoice=getCompChoice();
      console.log("computer has clicked  on",compChoice);
      //now we have got user choice as well as computer choice and now we compare both the choices
      comptext.innerText=`Computer : ${compChoice}`;
      if(compChoice===userChoice){
        draw();
      }

      else{
        let userWin=true;
        if(userChoice==="rock"){
         userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            //user choice===scissor
            userWin=compChoice==="rock"?false:true;
        }
        //show winner after all the comparisions
        showWinner(userWin,userChoice,compChoice);
        
      }
  
        
}

function draw(){
    console.log("game has been drawn");
    msg.innerHTML="game is drawn";
    msg.style.backgroundColor="grey"
}
function showWinner(user,userChoice,compChoice){
    if(user){
        console.log("user won");
        msg.innerHTML=`WIN! ${userChoice} has defeated ${compChoice}`;
        msg.style.backgroundColor="green"
        userscore++;
        console.log(userscore);
        userScore.innerText=userscore;
        userScore.style.color="green";
        
 


    }
    else{
        console.log("computer won");
        msg.innerHTML=`LOSE! ${compChoice} has defeated your ${userChoice} `;
        msg.style.backgroundColor="red";
        compscore++;
        console.log(compscore);
        compScore.innerText=compscore;
        compScore.style.color="red";
    }
}

//reset score
resetBtn.addEventListener("click",function(){
    userScore.innerText="0";
    compScore.innerText="0";
    userscore=0;
    compscore=0;
    msg.innerHTML="Play your Move";
    msg.style.backgroundColor="#103239";
    compScore.style.color="black";
    userScore.style.color="black";
    usertext.classList.remove("style");
    comptext.classList.remove("style");
    usertext.innerText="";
    comptext.innerText="";
    
    

})
