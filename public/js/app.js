angular.module("webPet", [])
.controller("petController", [
  '$scope',
  'PET_BASE_FRAME1',
  'EGG_BASE_FRAME1',
  'POOP_BASE_FRAME1',
  ($scope, PET_BASE_FRAME1, EGG_BASE_FRAME1, POOP_BASE_FRAME1) => {
    $scope.petState = PET_BASE_FRAME1;
    $scope.petState = EGG_BASE_FRAME1;
    $scope.petState = POOP_BASE_FRAME1;
  }
])
