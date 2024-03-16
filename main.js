let choice=document.querySelectorAll(".choice");
let user=document.querySelector("#your-score");
let computer=document.querySelector("#com-score");
let yourscore=0;
let comscore=0;
let comchoice,userchoice;
let game=(userchoice)=>{
    let com=Math.floor(Math.random()*3);
    if(com==0){
        comchoice="rock";
    }
    else if(com==1){
        comchoice="paper";
    }
    else{
        comchoice="scissor"
    }
    if((userchoice=="rock" && comchoice=="paper") || (userchoice=="paper" && comchoice=="scissor") || (userchoice=="scissor" && comchoice=="rock")){
        comscore+=1;
        console.log(comscore);
     }
     else if((userchoice=="rock" && comchoice=="scissor") || (userchoice=="paper" && comchoice=="rock") || (userchoice=="scissor" && comchoice=="paper")){
         yourscore+=1;
         console.log(yourscore);
     }
     
     document.querySelector("#your-score").innerText=yourscore;
     document.querySelector("#com-score").innerText=comscore;
     if(user.innerText==10){
        window.alert("You Won!!!");
     }
     else if(computer.innerText==10){
        window.alert("You Lost :(");
     }
}
choice.forEach(choice => {
    console.log("Attaching event listener to choice:", choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("User clicked choice with ID:", userchoice);
        game(userchoice);
    });
});
console.log(`your score ${yourscore}`);
console.log(`your score ${comscore}`);
let mode= document.querySelector(".mode");
let currentMode="light";
mode.addEventListener("click", ()=>{
    if(currentMode=="light"){
        currentMode="dark";
        mode.style.border="solid white";
        mode.style.backgroundColor="black";
        mode.style.color="white";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector(".score").style.color="white";
        mode.innerText="Light Mode";
    }
    else{
        currentMode="light";
        mode.style.border="solid black";
        mode.style.backgroundColor="white";
        mode.style.color="black";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector(".score").style.color="black";
        mode.innerText="Dark Mode";
}
});

