angular.module("webPet") // attach a controller to the module
.controller( 'StatusController',
  ['$scope',
  '$interval',
  ($scope, $interval) => {
    $scope.petName = 'doggie';
    $scope.health = $scope.HealthService.getHealth();
    $scope.hunger = $scope.HungerService.getHungerLvl();
    $scope.happiness = $scope.HappinessService.getHappinessLvl();
    $scope.energy = $scope.EnergyService.getEnergyLvl();
    $scope.pooped = $scope.PoopService.pooped;

    $scope.input = '';

    this.updateStatus = $interval (() => {
      $scope.health = $scope.HealthService.getHealth();
      $scope.hunger = $scope.HungerService.getHungerLvl();
      $scope.happiness = $scope.HappinessService.getHappinessLvl();
      $scope.energy = $scope.EnergyService.getEnergyLvl();
      $scope.pooped = $scope.PoopService.pooped;
    }, 1000);

    this.updateOnPlayerAction = () => {
      $scope.health = $scope.HealthService.getHealth();
      $scope.hunger = $scope.HungerService.getHungerLvl();
      $scope.happiness = $scope.HappinessService.getHappinessLvl();
      $scope.energy = $scope.EnergyService.getEnergyLvl();
      $scope.pooped = $scope.PoopService.pooped;
    }

    this.feed = () => {
      $scope.HungerService.decrementHungerLvl(1);
      this.updateOnPlayerAction();
    }

    this.play = () => {
      $scope.HappinessService.incrementHappinessLvl(1);
      this.updateOnPlayerAction();
    }

    this.clean = () => {
      $scope.PoopService.cleanPoop();
      this.updateOnPlayerAction();
    }

    this.wake = () => {
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