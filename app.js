const p2Score = document.querySelector("#p2Score");
const scoreTarget = document.querySelector("#scoreTarget");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const resetButton = document.querySelector("#resetButton");
let winningScore = 3;
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector("#button1"),
  display: document.querySelector("#p1Score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#button2"),
  display: document.querySelector("#p2Score"),
};

const updateScore = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.textContent = player.score;
      opponent.display.textContent = opponent.score;
      greenTextColor(player.display);
      redTextColor(opponent.display);
    }
    player.display.textContent = player.score;
  }
};

const resetScore = (player, opponent) => {
  isGameOver = false;
  player.score = 0;
  player.display.textContent = player.score;
  opponent.score = 0;
  opponent.display.textContent = opponent.score;
  blackTextColor(player.display);
  blackTextColor(opponent.display);
};

function greenTextColor(score) {
  score.style.color = "green";
}
function redTextColor(score) {
  score.style.color = "red";
}
function blackTextColor(score) {
  score.style.color = "black";
}
function whiteTextColor(score) {
  score.style.color = "white";
}
function greenBackColor(score) {
  score.style.backgroundColor = "green";
}
function blueBackColor(score) {
  score.style.backgroundColor = "blue";
}
function redBackColor(score) {
  score.style.backgroundColor = "red";
}

greenBackColor(button1);
blueBackColor(button2);
redBackColor(resetButton);
whiteTextColor(button1);
whiteTextColor(button2);
whiteTextColor(resetButton);

scoreTarget.addEventListener("change", () => {
  winningScore = parseInt(scoreTarget.value);
});

button1.addEventListener("click", () => {
  updateScore(p1, p2);
});

button2.addEventListener("click", () => {
  updateScore(p2, p1);
});

resetButton.addEventListener("click", () => {
  resetScore(p1, p2);
});
