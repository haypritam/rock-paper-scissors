function decide(a,b){
    switch(a){
        case "ROCK":
            if (b==="ROCK")
                return 0
            else if(b==="PAPER")
                return -1
            else if(b==="SCISSORS")
                return 1
            break
        case "PAPER":
            if (b==="ROCK")
                return 1
            else if(b==="PAPER")
                return 0
            else if(b==="SCISSORS")
                return -1
            break
        case "SCISSORS":
            if (b==="ROCK")
                return -1
            else if(b==="PAPER")
                return 1
            else if(b==="SCISSORS")
                return 0
            break
    }
}

function playRound(playerSelection, computerSelection) {
    const result =decide(playerSelection,computerSelection)
    if(result===0)
        return "its a draw"
    else if(result===1)
        return "computer lost "+playerSelection+" beats "+computerSelection
    else if(result===-1)
        return "you lost "+computerSelection+" beats "+playerSelection
}
function getComputerChoice(){
    const choice =Math.floor(Math.random() * 3);
    if(choice===0)
        return "ROCK"
    else if(choice===1)
        return "PAPER"
    else 
        return "SCISSORS"
}
   
function game(){
    for(let i=0;i<5 ;i++){
        const playerSelection = prompt("Please enter your choice Rock paper or scissors:").toUpperCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()