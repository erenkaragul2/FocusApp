const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");
const pauseButton = document.querySelector(".pause-btn");
const startButton = document.querySelector(".start-btn");
const pauseButton1 = document.querySelector(".pause-btn1");
const startButton1 = document.querySelector(".start-btn1");
const pauseButton2 = document.querySelector(".pause-btn2");
const startButton2 = document.querySelector(".start-btn2");
const waves = document.querySelector(".waves");
const fire = document.querySelector(".fire");
const wind = document.querySelector(".wind");
let volume = document.querySelector(".volume");
let volume2 = document.querySelector(".volume2");
let volume3 = document.querySelector(".volume3");
focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startBtn.style.transform = "scale(1)";
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("resume");
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "resume";
    pauseBtn.classList.add("resume");
    paused = true;
  }
});

startButton.addEventListener("click", () => {
    wind.play()
    startButton.style.color = "yellow"
});
pauseButton.addEventListener("click", () => {
    wind.pause();
    startButton.style.color = "black"
    wind.currentTime = 0;
});
startButton1.addEventListener("click", () => {
    fire.play()
    startButton1.style.color = "red"
});
pauseButton1.addEventListener("click", () => {
    fire.pause();
    fire.currentTime = 0;
    startButton1.style.color = "black"
});
startButton2.addEventListener("click", () => {
    waves.play()
    startButton2.style.color = "red"
});
pauseButton2.addEventListener("click", () => {
    waves.pause();
    waves.currentTime = 0;
    startButton2.style.color = "black"
});
volume.addEventListener("change", function(e) {
    wind.volume = e.currentTarget.value / 100;
    });
volume2.addEventListener("change", function(a) {
    fire.volume = a.currentTarget.value / 100;
    });
volume3.addEventListener("change", function(b) {
    waves.volume = b.currentTarget.value / 100;
    });
