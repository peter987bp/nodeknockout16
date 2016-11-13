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
    $scope.isAlive = $scope.HealthService.isAlive;
    $scope.playing = false;
    $scope.feeding = false;

    $scope.input = '';

    this.updateStatus = $interval (() => {
      if ($scope.HealthService.isAlive) {
        $scope.health = $scope.HealthService.getHealth();
        $scope.hunger = $scope.HungerService.getHungerLvl();
        $scope.happiness = $scope.HappinessService.getHappinessLvl();
        $scope.energy = $scope.EnergyService.energyLvl;
        $scope.pooped = $scope.PoopService.pooped;
        $scope.awake = $scope.EnergyService.awake;
        $scope.isAlive = $scope.HealthService.isAlive;
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
      $scope.isAlive = $scope.HealthService.isAlive;

    }

    this.feed = () => {
      console.log('$scope.feedingstate: ', $scope.feeding);
      $scope.feeding = true;
      console.log('$scope.feedingstate: ', $scope.feeding);
      if ($scope.HealthService.isAlive) {
        $scope.HungerService.decrementHungerLvl(1);
        this.updateOnPlayerAction();
      }
    }

    this.play = () => {
      $scope.playing = true;
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