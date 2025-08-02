const cells = document.querySelectorAll('#box')
const buton = document.getElementById('button')
const statu = document.getElementById('status')

let running = true;
let gamestate = ["","","","","","","","",""];
let curr = 'X';

const winner = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [0, 4, 8], [2, 4, 6]];

function clicki(e) {
    const cell = e.target;
    const index = cell.getAttribute("data-index");
    if (gamestate[index] != "" || !running) return;
    gamestate[index] = curr;
    cell.textContent = curr;

    if (checkWinner()) {
        statu.textContent = `Player ${curr} is winner!`;
        running = false;
        return;
    }
    if (!gamestate.includes("")) {
    statu.textContent = "It's a draw!";
    running = false;
    return;
    }
    curr = curr === "X" ? "O" : "X";
  statu.textContent = `Player ${curr}'s turn`;
}

function checkWinner() {
  let isWinner = false;

  winner.forEach(condition => {
    const [a, b, c] = condition;

    if (
      gamestate[a] &&
      gamestate[a] === gamestate[b] &&
      gamestate[a] === gamestate[c]
    ) {
      isWinner = true;
    }
  });

  return isWinner;
}

function restartGame() {
  gamestate = ["", "", "", "", "", "", "", "", ""];
  curr= "X";
  running = true;
  statu.textContent = `Player X's turn`;
  cells.forEach(cell => cell.textContent = "");
}
cells.forEach(cell => cell.addEventListener("click", clicki));
buton.addEventListener("click", restartGame);