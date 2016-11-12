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

    console.log('Health',HealthService.getHealth());
    console.log('Hunger',HungerService.getHungerLvl());
    console.log('Happiness',HappinessService.getHappinessLvl());
    console.log('Energy',EnergyService.getEnergyLvl());

  }]);