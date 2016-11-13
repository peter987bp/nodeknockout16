angular.module("webPet").controller("animController", [
  '$scope',
  '$interval',
  '$timeout',
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
    $timeout,
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

    this.animate = $interval(() => {
      //iterate through animation frames in a continuous loop
      //change frame array as state changes in parent
      if($scope.isAlive === true){
        if($scope.timer < 8) {

        //hatch during the first few frames
        $scope.petState = $scope.eggHatchFrames[$scope.timer % $scope.eggHatchFrames.length];
        } else {
          //main state
          //base state -  nothing happening
          $scope.petState = $scope.baseFrames[$scope.timer % 2];
          //check if pooped, asleep, or playing and change animation accordingly
          if($scope.pooped) {
            $scope.poopState = $scope.poopFrames[$scope.timer % 2];
          } else if(!$scope.pooped) {
            $scope.poopState = "";
          }
          if($scope.playing) {
            $scope.petState = $scope.playFrames[$scope.timer % 2];
            $timeout(() => {
              $scope.playing = false;
            }, 5000)
          } else if(!$scope.playing) {
            $scope.petState = $scope.baseFrames[$scope.timer % 2];
          }
          if($scope.feeding) {
            $scope.poopState = $scope.eatFrames[$scope.timer % 4];
            $timeout(() => {
              console.log('$scope.feeding: ', $scope.feeding);
              $scope.feeding = false;
              console.log('$scope.feeding: ', $scope.feeding);

            }, 4000)
          } else if(!$scope.feeding) {
            $scope.poopState = '';
          }
        }
      }else{
        $interval.cancel(this.animate);
        $scope.petState = '';
        $scope.petState = $scope.dieFrames[0];
      }

    }, (50 * (20 - $scope.health)));


  }
])