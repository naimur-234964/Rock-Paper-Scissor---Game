let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const drawGame = ()=>{
}

const genCompChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return choices[idx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice =", userChoice);
    
    const compChoice = genCompChoice();
    console.log("computer Choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
        msg.innerText = `Game was draw! Your ${userChoice} and ${compChoice} are same!`;
        msg.style.backgroundColor = "#081b31"
        
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
             userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
            //rock, paper
            userWin = compChoice === "rock" ?  false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});