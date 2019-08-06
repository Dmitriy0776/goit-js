const startBtn = document.querySelector('button[data-action="start"]');
startBtn.className = "button";
const stopBtn = document.querySelector('button[data-action="stop"]');
stopBtn.className = "button";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColors = {
  isActive: false,
  intervalId: '',
  start() {
    if(!this.isActive) {
      this.isActive = true;
      this.intervalId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
        startBtn.disabled = true;
      }, 1000);
    }
  },
  stop() {
    clearInterval(this.intervalId);
    startBtn.disabled = false;
    this.isActive = false;
    console.log('this.intervalId :', this.intervalId);
  },
};

startBtn.addEventListener('click', switchColors.start.bind(switchColors));
stopBtn.addEventListener('click', switchColors.stop.bind(switchColors));
