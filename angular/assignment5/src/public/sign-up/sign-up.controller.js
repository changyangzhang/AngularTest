(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var signUpCtrl = this;
  signUpCtrl.dish = null;
  signUpCtrl.validDish = function (){
    MenuService.getItem(signUpCtrl.user.favorite).then(function(response){
        signUpCtrl.dish = response
        signUpCtrl.realDish = true;
      }).catch(function(e){
        signUpCtrl.realDish = false;
      })
  }
  signUpCtrl.submit = function () {
    if (signUpCtrl.realDish == true) {
      signUpCtrl.completed = true;
      SignUpService.saveData(signUpCtrl.user, signUpCtrl.dish);
    }
 }
}
})();
