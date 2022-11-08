let time = 0;
const timebtn = Array.from(document.getElementsByClassName("time"));
const btnHours = document.querySelector("#btn-hours");
const btnMin = document.querySelector("#btn-min");
const btnSec = document.querySelector("#btn-sec");
timebtn.forEach((e) => e.addEventListener("click", timeUp));

function timeUp(event) {
  time += 10;
  event.preventDefault();
  console.log(time);
  btnHours.innerText = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  btnMin.innerText = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  btnSec.innerText = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
}

console.log(btnSec.innerText);
function timeGoing() {
  btnHours.innerText = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  btnMin.innerText = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  btnSec.innerText = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  time -= 1;
}
const startBtn = document.querySelector("#startbtn");
startBtn.addEventListener("click", () => {
  setInterval(timeGoing, 1000);
});

const resetBtn = document.querySelector("#resetbtn");
resetBtn.addEventListener("click", () => {
  location.reload();
});
