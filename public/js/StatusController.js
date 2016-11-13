angular.module("webPet") // attach a controller to the module
.controller( 'StatusController',
  ['$scope',
  '$interval',
  ($scope, $interval) => {
    $scope.petName = 'doggie';
    $scope.health = $scope.HealthService.getHealth();
    $scope.hunger = $scope.HungerService.getHungerLvl();
    $scope.happiness = $scope.HappinessService.getHappinessLvl();
    $scope.energy = $scope.EnergyService.energyLvl;
    $scope.pooped = $scope.PoopService.pooped;
    $scope.awake = $scope.EnergyService.awake;

    $scope.input = '';

    this.updateStatus = $interval (() => {
      if ($scope.HealthService.isAlive) {
        $scope.health = $scope.HealthService.getHealth();
        $scope.hunger = $scope.HungerService.getHungerLvl();
        $scope.happiness = $scope.HappinessService.getHappinessLvl();
        $scope.energy = $scope.EnergyService.energyLvl;
        $scope.pooped = $scope.PoopService.pooped;
        $scope.awake = $scope.EnergyService.awake;
      } else {
        $interval.cancel(this.updateStatus);
      }
    }, 1000);

    this.updateOnPlayerAction = () => {
      $scope.health = $scope.HealthService.getHealth();
      $scope.hunger = $scope.HungerService.getHungerLvl();
      $scope.happiness = $scope.HappinessService.getHappinessLvl();
      $scope.energy = $scope.EnergyService.energyLvl;
      $scope.pooped = $scope.PoopService.pooped;
      $scope.awake = $scope.EnergyService.awake;
    }

    this.feed = () => {
      if ($scope.HealthService.isAlive) {
        $scope.HungerService.decrementHungerLvl(1);
        this.updateOnPlayerAction();
      }
    }

    this.play = () => {
      if ($scope.HealthService.isAlive) {
        $scope.HappinessService.incrementHappinessLvl(1);
        this.updateOnPlayerAction();
      }
    }

    this.clean = () => {
      if ($scope.HealthService.isAlive) {
        $scope.PoopService.cleanPoop();
        this.updateOnPlayerAction();
      }
    }

    this.wake = () => {
      if ($scope.HealthService.isAlive) {
        $scope.EnergyService.wakeUp();
        this.updateOnPlayerAction();
      }
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