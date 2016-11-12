angular.module("webPet") // attach a controller to the module
.controller( 'StatusController',
  ['$scope',
  'HealthService',
  'HungerService',
  'HappinessService',
  'EnergyService',
  ($scope, HealthService, HungerService, HappinessService, EnergyService) => {
    $scope.petName = 'doggie';
    $scope.health = HealthService.getHealth();
    $scope.hunger = HungerService.getHungerLvl();
    $scope.happiness = HappinessService.getHappinessLvl();
    $scope.energy = EnergyService.getEnergyLvl();

    $scope.input = '';

    this.resetStatus = () => {
      $scope.health = HealthService.getHealth();
      $scope.hunger = HungerService.getHungerLvl();
      $scope.happiness = HappinessService.getHappinessLvl();
      $scope.energy = EnergyService.getEnergyLvl();
    }

    this.feed = () => {
      HungerService.reduceHunger();
      this.resetStatus();
    }

    $scope.read = () => {
      if ($scope.input === 'feed') {
        this.feed();
      }

      $scope.input = '';
    }

  }]);