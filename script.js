const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        const result = getResult(playerChoice, computerChoice);
        updateScore(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return "tie";
    } else if ((player === "rock" && computer === "scissors") ||
               (player === "paper" && computer === "rock") ||
               (player === "scissors" && computer === "paper")) {
        return "win";
    } else {
        return "lose";
    }
}

function updateScore(result) {
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    let message = "";
    if (result === "win") {
        message = "You win!";
    } else if (result === "lose") {
        message = "You lose!";
    } else {
        message = "It's a tie!";
    }
    resultDiv.textContent = `${message} You chose ${playerChoice}, computer chose ${computerChoice}.`;
}
