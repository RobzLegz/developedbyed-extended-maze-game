//svg mazes
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");
//UI MESSAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
//End Game
const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");

const yesButton = document.getElementById("yes");

const playPopup = document.getElementById("play");

let level = 1;
let started = false;

yesButton.addEventListener("click", () => {
  playPopup.classList.add("play-pressed");
});

const levelCheck = () => {
  if (level === 2) {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "Two more to go...";
  } else if (level === 3) {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
    uiLevel.textContent = "Level 3";
    uiMessage.textContent = "One more to go...";
  }
};

const collisionCheck = (value) => {
  if (value === "maze-border") alert("You lost...try again.");
  if (value === "finish") {
    level += 1;
    started = false;
    levelCheck();
  }
  if (value === "end-game") {
    screamSound.play();
    spookyPicture.style.display = "block";
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;

  if (check == "start" && !started) {
    started = true;
  }

  if (started) {
    collisionCheck(check);
  }
});
