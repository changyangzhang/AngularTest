(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'shoppingList.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.found = []

    list.findMatch = function (searchTerm) {
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
        list.found = result
      });
      console.log(list.found);
    }

    list.removeItem = function (itemIndex) {
      list.found.splice(itemIndex, 1)
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        // process result and only keep items that match
        var foundItem = [];
        for (var i = 0 ; i < result.data.menu_items.length ; i++)
        {
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItem.push(result.data.menu_items[i]);
          }
        };
        // return processed items
        return foundItem;
      });
    };
  }
})();
