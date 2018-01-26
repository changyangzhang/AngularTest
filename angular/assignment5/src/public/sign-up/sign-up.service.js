(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;
  var user = null;
  var dishInfo = null;
  service.saveData = function(data,dish) {
    user = data;
    dishInfo = dish
  }

  service.getData = function() {
    return user;
  }

  service.getDishData = function() {
    return dishInfo;
  }
}
})();
