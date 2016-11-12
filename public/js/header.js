angular.module('myApp') // attach a controller to the module
  .controller( 'header', ['$scope',
    ($scope) => {
      $scope.petName = 'doggie';
      $scope.health = 'max';
    }]);