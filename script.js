const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const btn = document.querySelectorAll(".btn");
const win = document.querySelector(".win");
const comp = document.querySelector(".comp");
const users = document.querySelector(".real-score");
const comps = document.querySelector(".comp-score");
const winModal = document.querySelector(".win-modal");
const overlay = document.querySelector(".overlay");
const again = document.querySelector(".again");
const whoWin = document.querySelector(".who-win");
const better = document.querySelector(".better");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", playgame);
}
let userScore = 0;
let ComputerScore = 0;
function playgame(e) {
  let playerSelection = e.target.innerHTML;

  if (playerSelection === "Rock") playerSelection = 1;
  else if (playerSelection === "Paper") playerSelection = 2;
  else playerSelection = 3;
  console.log(playerSelection);
  let computerSelection = Math.trunc(Math.random() * 3 + 1);

  if (computerSelection === 1) {
    comp.innerHTML = "";
    comp.innerHTML = "<div class='rock btn'>Rock</div>";
  } else if (computerSelection === 2) {
    comp.innerHTML = "";
    comp.innerHTML = "<div class='paper btn'>Paper</div>";
  } else {
    comp.innerHTML = "";
    comp.innerHTML = "<div class='scissor btn'>Scissor</div>";
  }
  winner(playerSelection, computerSelection);
}

function winner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    win.innerHTML = "Match Draw !";
  } else if (playerSelection == 1 && computerSelection == 3) {
    win.innerHTML = "User Wins!";
    userScore += 1;
    users.innerHTML = userScore;
  } else if (playerSelection == 2 && computerSelection == 1) {
    win.innerHTML = "User Wins!";
    userScore += 1;
    users.innerHTML = userScore;
  } else if (playerSelection == 3 && computerSelection == 2) {
    win.innerHTML = "User Wins!";
    userScore += 1;
    users.innerHTML = userScore;
  } else {
    win.innerHTML = "Computer Wins!";
    ComputerScore += 1;
    comps.innerHTML = ComputerScore;
  }

  if (userScore == 10 || ComputerScore == 10) {
    overlay.classList.remove("hidden");
    winModal.classList.remove("hidden");
    if (userScore == 10) {
      whoWin.innerHTML = "You Win!!";
      better.innerHTML = "You Beat the Computer";
    } else {
      whoWin.innerHTML = "Computer Win!!";
      better.innerHTML = "Better Luck Next Time!";
    }
    again.addEventListener("click", function () {
      overlay.classList.add("hidden");
      winModal.classList.add("hidden");
      userScore = 0;
      ComputerScore = 0;
      users.innerHTML = userScore;
      comps.innerHTML = ComputerScore;
    });
  }
}
