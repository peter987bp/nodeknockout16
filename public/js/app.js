angular.module("webPet", [])
.controller("petController", [
  'PET_BASE_FRAME1',
  (PET_BASE_FRAME1) => {
    $scope.petState = PET_BASE_FRAME1;
  }
])