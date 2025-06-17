const slider = document.getElementById("slider");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

startBtn.addEventListener("click", () => {
  slider.style.animationPlayState = "running";
});

stopBtn.addEventListener("click", () => {
  slider.style.animationPlayState = "paused";
});
