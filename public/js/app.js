angular.module("webPet", [])
.controller("animController", [
  '$scope',
  '$interval',
  'TimerService',
  'PET_BASE_FRAME1',
  'PET_BASE_FRAME2',
  ($scope, $interval, TimerService, PET_BASE_FRAME1, PET_BASE_FRAME2) => {

    //Initial pet sprite when game is started
    $scope.petState = null;

    $scope.baseFrames = [PET_BASE_FRAME1, PET_BASE_FRAME2];
    //Fill in these arrays as above
    $scope.eggFrames = [];
    $scope.sleepFrames = [];
    $scope.playFrames = [];
    $scope.eatFrames = [];
    $scope.poopFrames = [];
    $scope.dieFrames = [];

    this.animate = $interval(() => {
      //iterate through animation frames in a continuous loop
      //change frame array as state changes in parent
      $scope.petState = $scope.baseFrames[TimerService.timer % 2];
    }, (50 * (20 - $scope.health)));

    $scope.die = () => {
      //display death frames, then stop animation entirely
      cancel(this.animate);
    }

  }
])
