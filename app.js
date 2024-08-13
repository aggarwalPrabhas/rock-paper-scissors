const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_PLAYER_CHOICE = ROCK;

const startGameBtn = document.getElementById("start-game-btn");
let gameRunning = false;

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

startGameBtn.addEventListener("click", function () {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log("Game has started!!");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
