(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;

    list1.items = ShoppingListCheckOffService.getToBuyItems();

    list1.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;

    list2.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "cola",
        quantity: 2
      },
      {
        name: "pasta",
        quantity: 5
      },
      {
        name: "chicken",
        quantity: 6
      },
      {
        name: "beef",
        quantity: 7
      }
  ];
    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.buyItem = function (itemIdex) {
      boughtItems.push(toBuyItems[itemIdex]);
      toBuyItems.splice(itemIdex, 1);
    };
  }
})();
