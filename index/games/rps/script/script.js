let userChoice = "";

const getUserChoice = (userInput) => {
  userChoice = userInput;
};

function getComputerChoice() {
  let cpuChoice = Math.floor(Math.random() * 3);
  if (cpuChoice === 0) {
    return "rock";
  } else if (cpuChoice === 1) {
    return "paper";
  } else if (cpuChoice === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}

const score = {
  player: 0,
  cpu: 0,
  ties: 0,
  rounds: 0,
};

function playGame() {
  var computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);

  score.rounds++;
  switch (winner) {
    case "Player":
      score.player++;
      break;
    case "Computer":
      score.cpu++;
      break;
    case "Tie":
      score.ties++;
      break;
  }

  console.log("\nPlayer: " + userChoice);
  console.log("CPU: " + computerChoice);
  if (winner != "Tie") {
    console.log("Winner: " + winner);
  } else {
    console.log("Tie game!");
  }
  console.log(score);

  scorePlayer.textContent = `Player wins: ${score.player}` + " ";
  scoreCPU.textContent = `Computer wins: ${score.cpu}`;
  round.textContent = `Round ${score.rounds}`;
  choicePlayer.textContent = `You:     ${userChoice}`;
  choiceCPU.textContent = `CPU:     ${computerChoice}`;
  if (winner != "Tie") {
    gameWinner.textContent = "Winner: " + winner;
  } else {
    gameWinner.textContent = "Tie game!";
  }
}

function play(input) {
  getUserChoice(input);
  playGame();
}
