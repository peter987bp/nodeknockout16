const MinuteLimit = 2;

angular.module("webPet")
.service('TimerService', [
  class TimerService {
    constructor() {
      this.timer = minuteLimit * 60;
      this.countDown;
      this.killTimer = this.killTimer.bind(this);
    }

    startTimer() {
      this.countDown = setInterval(() => {
        this.timer--;
      }, 1000);
    }

    killTimer() {
      clearInterval(this.countDown);
      resetTimer();
    }

    resetTimer() {
      this.timer = minuteLimit * 60;
    }
  }
];