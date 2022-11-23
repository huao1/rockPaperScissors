
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


function playRound(computerChoice, playerChoice = getPlayerChoice()) {

    computerChoice = computerChoice.toUpperCase();
    playerChoice = playerChoice.toUpperCase();
    const container = document.querySelector(".message-container");

    let exist = document.querySelector(".message") !== null;

    if (!exist) {
        for (let i = 0; i < 3; i ++) {
            const message1 = document.createElement("h4");
            message1.classList.add("message");
            container.appendChild(message1);
        }
    }

    const messages = document.querySelectorAll("h4");
    messages[0].textContent = `The player chooses ${playerChoice}`;
    messages[1].textContent = `The computer choose ${computerChoice}`;
    
    if (playerChoice == computerChoice) {
        messages[2].textContent = "Draw, no one wins this round";
        return 0; 
    }
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        messages[2].textContent = "You win! Paper beats rock";
        return 1;
    }
    else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        messages[2].textContent = "You lose! Paper beats rock";
        return 2;
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSOR") {
        messages[2].textContent = "You win! Rock beats Scissor";
        return 1;
    }
    else if (playerChoice == "SCISSOR" && computerChoice == "ROCK") {
        messages[2].textContent ="You lose! Rock beats Scissor";
        return 2;
    }
    else if (playerChoice == "SCISSOR" && computerChoice == "PAPER") {
        messages[2].textContent ="You win! Scissor beats Paper";
        return 1;
    }
    else if (playerChoice == "PAPER" && computerChoice == "SCISSOR") {
        messages[2].textContent ="You lose! Scissor beats Paper";
        return 2;
    }
}

function checkWinCondition(playerScore, computerScore) {

    const winMessage = document.createElement("h1");

    if (playerScore.textContent == "5") {
        winMessage.textContent = "You have won!!!";
    }
    else if (computerScore.textContent == "5") {
        winMessage.textContent = "Sorry but you lost!!!";
    }
    else {
        return 0;
    }

    const parentNode = document.querySelector("body");
    const referenceNode = document.querySelector(".replay");
    winMessage.style.marginBottom = "50px";
    parentNode.insertBefore(winMessage, referenceNode);

    const buttons = document.querySelectorAll("div > button");
    for (let i = 0; i < 3; i++) {
        buttons[i].style.display = "none";
    }

    replay();

}

function replay() {
    const button = document.querySelector(".replay");
    button.style.display = "block";

    button.addEventListener("click", reset, {
        once: true
    });
}

function reset() {
    const scores = document.querySelectorAll(".score");
    const button = document.querySelector(".replay");

    scores.forEach((score) => {
        score.textContent = "0";
    });

    button.style.display = "none";
    const body = document.querySelector("body");
    const h1 = document.querySelector("body > h1");
    body.removeChild(h1);

    const buttons = document.querySelectorAll("div > button");
    for (let i = 0; i < 3; i++) {
        buttons[i].style.display = "block";
    }
}

function game() {
    let playerScore = document.querySelector("#human-score");
    let computerScore = document.querySelector("#computer-score");
    
    const buttons = document.querySelectorAll('div > button');
    buttons.forEach((button) => {
    
        button.addEventListener("click", () => {
            let result = playRound(getComputerChoice(), button.id);

            switch (result) {
                case 0:
                    break;
                case 1:
                    playerScore.textContent = Number(playerScore.textContent) + 1;
                    break;
                case 2:
                    computerScore.textContent = Number(computerScore.textContent) + 1;
                    break;
            }
            checkWinCondition(playerScore, computerScore);

        });
    });

}

game();
