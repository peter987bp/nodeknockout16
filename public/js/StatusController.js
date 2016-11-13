angular.module("webPet") // attach a controller to the module
.controller( 'StatusController',
  ['$scope',
  '$interval',
  ($scope, $interval) => {
    this.statusLvl = [
      '[░░░░░░░░░░]',
      '[█░░░░░░░░░]',
      '[██░░░░░░░░]',
      '[███░░░░░░░]',
      '[████░░░░░░]',
      '[█████░░░░░]',
      '[██████░░░░]',
      '[███████░░░]',
      '[████████░░]',
      '[█████████░]',
      '[██████████]'
    ]

    $scope.petName = 'doggie';
    $scope.health = this.statusLvl[$scope.HealthService.getHealth()];
    $scope.hunger = this.statusLvl[$scope.HungerService.getHungerLvl()];
    $scope.happiness = this.statusLvl[$scope.HappinessService.getHappinessLvl()];
    $scope.energy = this.statusLvl[$scope.EnergyService.energyLvl];
    $scope.pooped = $scope.PoopService.pooped;
    $scope.awake = $scope.EnergyService.awake;
    $scope.isAlive = $scope.HealthService.isAlive;
    $scope.playing = false;
    $scope.feeding = false;

    $scope.playCalled = 0;
    $scope.feedCalled = 0;

    $scope.input = '';

    this.updateStatus = $interval (() => {
      if ($scope.HealthService.isAlive) {
        $scope.health = this.statusLvl[$scope.HealthService.getHealth()];
        $scope.hunger = this.statusLvl[$scope.HungerService.getHungerLvl()];
        $scope.happiness = this.statusLvl[$scope.HappinessService.getHappinessLvl()];
        $scope.energy = this.statusLvl[$scope.EnergyService.energyLvl];
        $scope.pooped = $scope.PoopService.pooped;
        $scope.awake = $scope.EnergyService.awake;
        $scope.isAlive = $scope.HealthService.isAlive;
      } else {
        $interval.cancel(this.updateStatus);
      }
    }, 1000);

    this.updateOnPlayerAction = () => {
      $scope.health = this.statusLvl[$scope.HealthService.getHealth()];
      $scope.hunger = this.statusLvl[$scope.HungerService.getHungerLvl()];
      $scope.happiness = this.statusLvl[$scope.HappinessService.getHappinessLvl()];
      $scope.energy = this.statusLvl[$scope.EnergyService.energyLvl];
      $scope.pooped = $scope.PoopService.pooped;
      $scope.awake = $scope.EnergyService.awake;
      $scope.isAlive = $scope.HealthService.isAlive;

    }

    this.feed = () => {
      $scope.feeding = true;
      $scope.feedCalled = $scope.timer;
      if ($scope.HealthService.isAlive && $scope.awake) {
        $scope.HungerService.decrementHungerLvl(1);
        this.updateOnPlayerAction();
      } else if (!$scope.awake) {
          console.log('Daaa, I am sleeping');
      }
    }

    this.play = () => {
      $scope.playing = true;
      $scope.playCalled = $scope.timer;
      if ($scope.HealthService.isAlive && $scope.awake) {
        $scope.HappinessService.incrementHappinessLvl(1);
        this.updateOnPlayerAction();
      } else if (!$scope.awake) {
          console.log('Daaa, I am sleeping');
      }
    }

    this.clean = () => {
      if ($scope.HealthService.isAlive) {
        $scope.PoopService.cleanPoop();
        this.updateOnPlayerAction();
      }
    }

    this.wake = () => {
      if ($scope.HealthService.isAlive && !$scope.awake) {
        $scope.EnergyService.wakeUp();
        this.updateOnPlayerAction();
      } else if ($scope.awake) {
          console.log('Daaa, I am awake');
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