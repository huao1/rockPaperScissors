

function getComputerChoice() {
    choice = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;

    if (choice == 0) {
        return "Rock"
    }
    else if (choice == 1) {
        return "Paper"
    }
    else {
        return "Scissor"
    }
}

function getPlayerChoice() {
    let choice = prompt("Please enter rock, paper, or scissor: ");
    return choice.toUpperCase();
}

function playRound(computerChoice, playerChoice = getPlayerChoice()) {

    computerChoice = computerChoice.toUpperCase();

    console.log(`The computer chooses ${computerChoice}`);
    console.log(`The player chooses ${playerChoice}`);

    
    if (playerChoice == computerChoice) {
        console.log("Draw, no one wins this round");
        return 0; 
    }
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You win! Paper beats rock");
        return 1;
    }
    else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("You lose! Paper beats rock");
        return 2;
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSOR") {
        console.log("You win! Rock beats Scissor");
        return 1;
    }
    else if (playerChoice == "SCISSOR" && computerChoice == "ROCK") {
        console.log("You lose! Rock beats Scissor");
        return 2;
    }
    else if (playerChoice == "SCISSOR" && computerChoice == "PAPER") {
        console.log("You win! Scissor beats Paper")
        return 1;
    }
    else if (playerChoice == "PAPER" && computerChoice == "SCISSOR") {
        console.log("You lose! Scissor beats Paper");
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore != 5 && computerScore != 5) {
        result = playRound(getComputerChoice());

        switch (result) {
            case 0:
                break;
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
        }
    }
}

game();
