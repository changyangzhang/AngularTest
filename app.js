(function () {
'use strict';

angular.module('Playing', [])
.controller('PlayingController', PlayingController);

PlayingController.$inject = ['$scope'];

function PlayingController($scope) {
  $scope.name = "";
  $scope.message = "";
  $scope.ausYes = function () {
    $scope.message = "Of course! Good luck with the meeting!";
      return;
  }

  $scope.ausNo = function () {
    $scope.message = "You are lying!";
      return;
  }

  };

})();
