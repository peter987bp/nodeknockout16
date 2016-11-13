angular.module("webPet")
.controller('TimeController', [
  '$scope',
  'EnergyService',
  'HappinessService',
  'HealthService',
  'HungerService',
  'PoopService',
  class TimeController {
    constructor($scope, EnergyService, HappinessService, HealthService, HungerService, PoopService) {
      $scope.EnergyService = EnergyService;
      $scope.HappinessService = HappinessService;
      $scope.HealthService = HealthService;
      $scope.HungerService = HungerService;
      $scope.PoopService = PoopService;

      $scope.EnergyService.init($scope);
      $scope.HappinessService.init($scope);
      $scope.HealthService.init($scope);
      $scope.HungerService.init($scope);
      $scope.PoopService.init($scope);

      $scope.timer = 0;
      this.countUp;


      this.startTimer = () => {
        this.countUp = setInterval(() => {
          $scope.timer++;
          console.log('tick');
        }, 1000);
      }

      this.startTimer();

      this.killTimer = () => {
        clearInterval(this.countUp);
        this.resetTimer();
      }

      $scope.killTimer = this.killTimer;

      this.resetTimer = () => {
        $scope.timer = 0;
      }
    }
  }
]);