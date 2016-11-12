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

    this.resetStatus = () => {
      $scope.health = HealthService.getHealth();
      $scope.hunger = HungerService.getHungerLvl();
      $scope.happiness = HappinessService.getHappinessLvl();
      $scope.energy = EnergyService.getEnergyLvl();
    }

    $scope.feed = () => {
      HungerService.reduceHunger();
      this.resetStatus();
    }

  }]);