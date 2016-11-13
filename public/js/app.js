angular.module("webPet", [])
.controller("animController", [
  '$scope',
  '$interval',
  'PET_BASE_FRAME1',
  'PET_BASE_FRAME2',
  'EGG_BASE_FRAME1',
  'EGGHATCH_BASE_FRAME1',
  'EGGHATCH_BASE_FRAME2',
  'EGGHATCH_BASE_FRAME3',
  'EGGHATCH_BASE_FRAME4',
  'EGGHATCH_BASE_FRAME5',
  'POOP_BASE_FRAME1',
  'POOP_BASE_FRAME2',
  'FOOD_BASE_FRAME1',
  'FOOD_BASE_FRAME2',
  'FOOD_BASE_FRAME3',
  'FOOD_BASE_FRAME4',
  'SLEEP_BASE_FRAME1',
  'SLEEP_BASE_FRAME2',
  'SLEEP_BASE_FRAME3',
  'PLAY_BASE_FRAME1',
  'PLAY_BASE_FRAME2',
  'DEATH_BASE_FRAME1',
  ($scope, $interval, PET_BASE_FRAME1, PET_BASE_FRAME2, EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME1, EGGHATCH_BASE_FRAME2, POOP_BASE_FRAME1,POOP_BASE_FRAME2,POOP_BASE_FRAME3, POOP_BASE_FRAME4,POOP_BASE_FRAME5, FOOD_BASE_FRAME1, FOOD_BASE_FRAME2, FOOD_BASE_FRAME3, FOOD_BASE_FRAME4,SLEEP_BASE_FRAME1,SLEEP_BASE_FRAME2,SLEEP_BASE_FRAME3,PLAY_BASE_FRAME1,PLAY_BASE_FRAME1,DEATH_BASE_FRAME1) => {
    //Initial pet sprite when game is started
    $scope.petState = null;
    $scope.poopState = "";

    $scope.baseFrames = [PET_BASE_FRAME1, PET_BASE_FRAME2];
    //Fill in these arrays as above
    $scope.eggFrames = [EGG_BASE_FRAME1];
    $scope.eggHatchFrames = [EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME1, EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME2, EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME3, EGGHATCH_BASE_FRAME4, EGGHATCH_BASE_FRAME5];
    $scope.sleepFrames = [SLEEP_BASE_FRAME1,SLEEP_BASE_FRAME2,SLEEP_BASE_FRAME3];
    $scope.playFrames = [PLAY_BASE_FRAME1,PLAY_BASE_FRAME2,PLAY_BASE_FRAME1];
    $scope.eatFrames = [FOOD_BASE_FRAME1, FOOD_BASE_FRAME2, FOOD_BASE_FRAME3, FOOD_BASE_FRAME4];
    $scope.poopFrames = [POOP_BASE_FRAME1, POOP_BASE_FRAME2];
    $scope.dieFrames = [DEATH_BASE_FRAME1];

    this.animate = $interval(() => {
      //iterate through animation frames in a continuous loop
      //change frame array as state changes in parent
      $scope.petState = $scope.baseFrames[$scope.timer % 2];
      if($scope.pooped) {
        $scope.poopState = $scope.poopFrames[0];
      } else if(!$scope.pooped) {
        $scope.poopState = "";
      }
    }, (50 * (20 - $scope.health)));

    $scope.die = () => {
      //display death frames, then stop animation entirely
      $interval.cancel(this.animate);
    }

  }
])
