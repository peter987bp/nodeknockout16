angular.module("webPet") // attach a controller to the module
.controller( 'StatusController',
  ['$scope',
  'TimerService',
  'HealthService',
  'HungerService',
  'HappinessService',
  'EnergyService',
  ($scope, TimerService, HealthService, HungerService, HappinessService, EnergyService) => {
    TimerService.startTimer();
    $scope.petName = 'doggie';
    $scope.health = HealthService.getHealth();
    $scope.hunger = HungerService.getHungerLvl();
    $scope.happiness = HappinessService.getHappinessLvl();
    $scope.energy = EnergyService.getEnergyLvl();
    $scope.awake = EnergyService.getAwake();

    $scope.input = '';

    this.updateStatus = () => {
      $scope.health = HealthService.getHealth();
      $scope.hunger = HungerService.getHungerLvl();
      $scope.happiness = HappinessService.getHappinessLvl();
      $scope.energy = EnergyService.getEnergyLvl();
    }

    this.feed = () => {
      HungerService.reduceHunger();
      this.updateStatus();
    }

    this.play = () => {
      HappinessService.incrementHappinessLvl(1);
      this.updateStatus();
    }

    this.clean = () => {
      this.updateStatus();
    }

    this.wake = () => {
      this.updateStatus();
    }

    $scope.read = () => {
      switch($scope.input.toLowerCase()) {
        case "feed":
        this.feed();
        break;
        case "play":
        this.play();
        break;
        case "wake":
        this.wake();
        break;
        case "clean":
        this.clean();
        break;
      }

      $scope.input = '';
    }

  }]);