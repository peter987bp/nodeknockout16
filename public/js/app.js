angular.module("webPet", [])
.controller("animController", [
  '$scope',
  '$interval',
  'PET_BASE_FRAME1',
  'PET_BASE_FRAME2',
  ($scope, $interval, PET_BASE_FRAME1, PET_BASE_FRAME2) => {

    $scope.petState = null;

    $scope.baseFrames = [PET_BASE_FRAME1, PET_BASE_FRAME2];
    $scope.animCount = 0;
    this.animate = $interval(() => {
      $scope.petState = $scope.baseFrames[++$scope.animCount % 2];
    }, (50 * $scope.health));

    $scope.die = () => {
      cancel(this.animate);
    }

  }
])
