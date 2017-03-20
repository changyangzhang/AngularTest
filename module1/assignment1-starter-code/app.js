(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "AAA";
  $scope.countLunch = function () {
    var arrayOfLunch = $scope.lunch.split(",");
    if (arrayOfLunch.length == 1){
      $scope.message = "Please enter data first.";
      return;
    }
    if (arrayOfLunch.length <= 4){
      $scope.message = "Enjoy!";
      return;
    }
    else {
      $scope.message = "Too much!";
      return;
    }
  };
}

})();
