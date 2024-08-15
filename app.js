const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const startGameBtn = document.getElementById("start-game-btn");
let gameRunning = false;

// Player Choice

const getPlayerChoice = function () {
  const selection = prompt(
    `Please enter your choice ${ROCK}, ${PAPER} or ${SCISSOR}`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `Invalid choice entered by you, default choice selected '${DEFAULT_PLAYER_CHOICE}'`
    );
    return DEFAULT_PLAYER_CHOICE;
  }

  return selection;
};

// Computer Choice

const getComputerChoice = function () {
  const randomNo = Math.random();
  if (randomNo < 0.34) {
    return ROCK;
  } else if (randomNo < 0.68) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

// Winner Function

const getWinner = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === ROCK && cChoice === SCISSOR) ||
    (pChoice === SCISSOR && cChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log("Game has started!!");

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);

  //   Showing result alert

  let message = `Your Choice is ${playerSelection} & computer choice is ${computerSelection} so result is `;
  if (winner === RESULT_DRAW) {
    message = message + "draw!";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "You win!";
  } else {
    message += "You Lost! Try again.";
  }

  alert(message);
  gameRunning = false;
});
