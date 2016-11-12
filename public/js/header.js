angular.module("webPet") // attach a controller to the module
.controller( 'header',  ['$scope', 'StatusService',
  ($scope, StatusService) => {
    $scope.petName = 'doggie';
    $scope.health = StatusService.getHealth();
  }]);