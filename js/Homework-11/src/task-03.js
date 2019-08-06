

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = document.querySelector(selector),
    this.targetDate = targetDate;
    this.timerId = '';
    this.start();
  }

  start(refs) {
    const targetTime = this.targetDate.getTime();
    const daysRef = this.selector.querySelector('[data-value="days"]');
    const hoursRef = this.selector.querySelector('[data-value="hours"]');
    const minsRef = this.selector.querySelector('[data-value="mins"]');
    const secsRef = this.selector.querySelector('[data-value="secs"]');

    function updateClockface(time) {

      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      daysRef.textContent = days;
      hoursRef.textContent = hours;
      minsRef.textContent = mins;
      secsRef.textContent = secs;
    }

    function pad(value) {
      return String(value).padStart(2, '0');
    }

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const time = targetTime - currentTime;

      updateClockface(time);
    }, 1000);
  }
}

  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 17, 2019'),
  });

