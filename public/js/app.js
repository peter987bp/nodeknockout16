angular.module("webPet", [])
.controller("petController", [
  '$scope',
  'PET_BASE_FRAME1',
  ($scope, PET_BASE_FRAME1) => {
    $scope.petState = PET_BASE_FRAME1;
  }
])
