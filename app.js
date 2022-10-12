const player1Name = document.querySelector(".player1");
const player2Name = document.querySelector(".player2");
const buttonBox = document.querySelector(".p1-button");
const p1Pick = document.querySelector(".p1-button");
const pickWord = document.querySelector(".pick");
const pickWord2 = document.querySelector(".pick2");
const p2Pick = document.querySelector(".p2-button");
const p1Rps = document.querySelector(".p1_rps");
const p2Rps = document.querySelector(".p2_rps");
const fight = document.querySelector(".fight-box");

// player 1
const threeOptions = document.querySelector(".options");
const rockSelect = document.querySelector(".rock");
const paperSelect = document.querySelector(".paper");
const scissorsSelect = document.querySelector(".scissors");

// player 2
const threeOptions2 = document.querySelector(".options2");
const rockSelect2 = document.querySelector(".rock2");
const paperSelect2 = document.querySelector(".paper2");
const scissorsSelect2 = document.querySelector(".scissors2");

const mainElement = document.querySelector("main");
const createElement = document.createElement("div");

player1Name.addEventListener("click", () => {
  const player1 = prompt("Input your name: ");
  player1Name.textContent = player1;
});

player2Name.addEventListener("click", () => {
  const player2 = prompt("Input your name: ");
  player2Name.textContent = player2;
});

// player 1
p1Pick.addEventListener("click", () => {
  // when user click on pick button, options pop up
  threeOptions.style.display = "block";
  p1Pick.style.display = "none";
  // threeOptions.className = "options-displayed";
  // "pick" words disappear
  pickWord.style.display = "none";
});

rockSelect.addEventListener("click", () => {
  // when user click on one of the options, value of p1Rps = the options user clicked
  p1Pick.style.display = "flex";
  p1Rps.textContent = "Rock";
  p1Pick.style.animation = "none";
  threeOptions.style.display = "none";

  // box turns to "picked"
  pickWord.style.display = "block";
  pickWord.textContent = "Picked ✅";
});

paperSelect.addEventListener("click", () => {
  // when user click on one of the options, value of p1Rps = the options user clicked
  p1Pick.style.display = "flex";
  p1Rps.textContent = "Paper";
  p1Pick.style.animation = "none";
  threeOptions.style.display = "none";

  // box turns to "picked"
  pickWord.style.display = "block";
  pickWord.textContent = "Picked ✅";
});

scissorsSelect.addEventListener("click", () => {
  // when user click on one of the options, value of p1Rps = the options user clicked
  p1Pick.style.display = "flex";
  p1Rps.textContent = "Scissors";
  p1Pick.style.animation = "none";
  threeOptions.style.display = "none";

  // box turns to "picked"
  pickWord.style.display = "block";
  pickWord.textContent = "Picked ✅";
});

// player 2
p2Pick.addEventListener("click", () => {
  // when user click on pick button, options pop up
  threeOptions2.style.display = "block";
  p2Pick.style.display = "none";
  // threeOptions.className = "options-displayed";
  // "pick" words disappear
  pickWord2.style.display = "none";
});

rockSelect2.addEventListener("click", () => {
  // when user click on one of the options, value of p2Rps = the options user clicked
  p2Pick.style.display = "flex";
  p2Rps.textContent = "Rock";
  p2Pick.style.animation = "none";
  threeOptions2.style.display = "none";

  // box turns to "picked"
  pickWord2.style.display = "block";
  pickWord2.textContent = "Picked ✅";
});

paperSelect2.addEventListener("click", () => {
  // when user click on one of the options, value of p2Rps = the options user clicked
  p2Pick.style.display = "flex";
  p2Rps.textContent = "Paper";
  p2Pick.style.animation = "none";
  threeOptions2.style.display = "none";

  // box turns to "picked"
  pickWord2.style.display = "block";
  pickWord2.textContent = "Picked ✅";
});

scissorsSelect2.addEventListener("click", () => {
  // when user click on one of the options, value of p2Rps = the options user clicked
  p2Pick.style.display = "flex";
  p2Rps.textContent = "Scissors";
  p2Pick.style.animation = "none";
  threeOptions2.style.display = "none";

  // box turns to "picked"
  pickWord2.style.display = "block";
  pickWord2.textContent = "Picked ✅";
});

// while (p1Rps.textContent !== "" && p2Rps.textContent !== "") {
//   console.log("something");
// }

// game start
function checkWinner() {
  let winner = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };

  // check for valid input
  if (
    p1Rps.textContent !== winner.Rock &&
    p1Rps.textContent !== winner.Scissors &&
    p1Rps.textContent !== winner.Paper
  ) {
    console.log(
      "Invalid input. Please choose either one: Rock / Paper / Scissors"
    );
    return "Invalid input. Please choose either one: Rock / Paper / Scissors";
  }

  if (
    p2Rps.textContent !== winner.Rock &&
    p2Rps.textContent !== winner.Scissors &&
    p2Rps.textContent !== winner.Paper
  ) {
    console.log(
      "Invalid input. Please choose either one: Rock / Paper / Scissors"
    );
    return "Invalid input. Please choose either one: Rock / Paper / Scissors";
  }

  // check for winner
  else {
    const p1RpsValue = p1Rps.textContent;
    const p2RpsValue = p2Rps.textContent;
    const newWinner = rps(p1RpsValue, p2RpsValue);
    function rps(p1RpsValue, p2RpsValue) {
      if (p1RpsValue === p2RpsValue) {
        const removeMain = mainElement.parentNode.removeChild(mainElement);
        createElement.textContent = "It's a draw !";
        createElement.classList.add("winner");
        document.body.appendChild(createElement);
        console.log("Its a draw");
        return "It's a draw";
      }
      console.log(
        `The winner is ${
          winner[p1RpsValue] === p2RpsValue
            ? `${player1Name.textContent}`
            : `${player2Name.textContent}`
        }`
      );
      const removeMain = mainElement.parentNode.removeChild(mainElement);
      createElement.textContent = `The winner is ${
        winner[p1RpsValue] === p2RpsValue
          ? `${player1Name.textContent}!`
          : `${player2Name.textContent}!`
      }`;
      createElement.classList.add("winner");
      document.body.appendChild(createElement);
      return `The winner is ${
        winner[p1RpsValue] === p2RpsValue
          ? `${player1Name.textContent}`
          : `${player2Name.textContent}`
      }`;
    }
  }
}

fight.addEventListener("click", checkWinner);
