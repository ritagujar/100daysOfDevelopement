let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  // To get a random number between 0-3 multiply by 3
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallComputerWord}. You win! `;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallComputerWord}. You lost... `;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}
function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallComputerWord}. It's a draw... `;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //   console.log("User Choice => " + userChoice);
  //   console.log("Computer choice => " + computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissor_div.addEventListener("click", () => {
    game("s");
  });
}
main();
