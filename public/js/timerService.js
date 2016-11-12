angular.module("webPet")
.service('TimerService', [
  class TimerService {
    constructor() {
      this.timer = 0;
      this.countUp;
      this.killTimer = this.killTimer.bind(this);
    }

    startTimer() {
      this.countDown = setInterval(() => {
        this.timer++;
        console.log('tick');
      }, 1000);
    }

    killTimer() {
      clearInterval(this.countDown);
      resetTimer();
    }

    resetTimer() {
      this.timer = 0;
    }
  }
]);