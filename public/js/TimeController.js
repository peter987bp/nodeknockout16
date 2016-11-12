angular.module("webPet")
.controller('TimeController', [
  '$scope',
  'EnergyService',
  'HappinessService',
  'HealthService',
  'HungerService',
  class TimeController {
    constructor($scope, EnergyService, HappinessService, HealthService, HungerService) {
      $scope.EnergyService = EnergyService;
      $scope.HappinessService = HappinessService;
      $scope.HealthService = HealthService;
      $scope.HungerService = HungerService;

      $scope.EnergyService.init($scope);
      $scope.HappinessService.init($scope);
      $scope.HealthService.init($scope);
      $scope.HungerService.init($scope);

      $scope.timer = 0;
      this.countUp;
      this.killTimer = this.killTimer.bind(this);

      this.startTimer = () => {
        this.countDown = setInterval(() => {
          $scope.timer++;
          console.log('tick');
        }, 1000);
      }

      this.startTimer();
    }

    killTimer() {
      clearInterval(this.countDown);
      resetTimer();
    }

    resetTimer() {
      $scope.timer = 0;
    }
  }
]);