angular.module("webPet").controller("animController", [
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
  (
    $scope,
    $interval,
    PET_BASE_FRAME1,
    PET_BASE_FRAME2,
    EGG_BASE_FRAME1,
    EGGHATCH_BASE_FRAME1,
    EGGHATCH_BASE_FRAME2,
    EGGHATCH_BASE_FRAME3,
    EGGHATCH_BASE_FRAME4,
    EGGHATCH_BASE_FRAME5,
    POOP_BASE_FRAME1,
    POOP_BASE_FRAME2,
    FOOD_BASE_FRAME1,
    FOOD_BASE_FRAME2,
    FOOD_BASE_FRAME3,
    FOOD_BASE_FRAME4,
    SLEEP_BASE_FRAME1,
    SLEEP_BASE_FRAME2,
    SLEEP_BASE_FRAME3,
    PLAY_BASE_FRAME1,
    PLAY_BASE_FRAME2,
    DEATH_BASE_FRAME1
  ) => {
    //Initial pet sprite when game is started
    $scope.petState = EGG_BASE_FRAME1;
    $scope.poopState = "";

    $scope.baseFrames = [PET_BASE_FRAME1, PET_BASE_FRAME2];
    //Fill in these arrays as above
    $scope.eggFrames = [EGG_BASE_FRAME1];
    $scope.eggHatchFrames = [EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME1, EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME2, EGG_BASE_FRAME1, EGGHATCH_BASE_FRAME3, EGGHATCH_BASE_FRAME4, EGGHATCH_BASE_FRAME5];
    $scope.sleepFrames = [SLEEP_BASE_FRAME1,SLEEP_BASE_FRAME2,SLEEP_BASE_FRAME3];
    $scope.playFrames = [PLAY_BASE_FRAME1,PLAY_BASE_FRAME2];
    $scope.eatFrames = [FOOD_BASE_FRAME1, FOOD_BASE_FRAME2, FOOD_BASE_FRAME3, FOOD_BASE_FRAME4];
    $scope.poopFrames = [POOP_BASE_FRAME1, POOP_BASE_FRAME2];
    $scope.dieFrames = [DEATH_BASE_FRAME1];

    $scope._feeding = false;
    $scope._playing = false;

    this.animate = $interval(() => {
      //iterate through animation frames in a continuous loop
      //change frame array as state changes in parent
      if($scope.isAlive) {

        $scope._feeding = $scope.feeding;
        $scope._playing = $scope.playing;

        if($scope.timer < 8) {

        //hatch during the first few frames
          $scope.petState = $scope.eggHatchFrames[$scope.timer % $scope.eggHatchFrames.length];
        } else if (!$scope.awake) {
          //asleep
          $scope.petState = $scope.sleepFrames[$scope.timer % $scope.sleepFrames.length];
          if($scope.pooped) {
            $scope.poopState = $scope.poopFrames[$scope.timer % 2];
          } else if($scope._feeding) {
            $scope.poopState = $scope.eatFrames[$scope.timer % $scope.eatFrames.length];
          } else {
            $scope.poopState = "";
          }
        } else {
          $scope.petState = $scope.baseFrames[$scope.timer % 2];
          //check if pooped, asleep, or playing and change animation accordingly
          if($scope.pooped) {
            $scope.poopState = $scope.poopFrames[$scope.timer % 2];
          } else if($scope._feeding) {
            $scope.poopState = $scope.eatFrames[$scope.timer % $scope.eatFrames.length];
          } else {
            $scope.poopState = "";
          }

          if($scope._playing) {
            $scope.petState = $scope.playFrames[$scope.timer % 2];
          }
        }

      } else {
        $interval.cancel(this.animate);
        $scope.petState = '';
        $scope.petState = $scope.dieFrames[0];
      }

    }, (50 * (20 - $scope.health)));


  }
])