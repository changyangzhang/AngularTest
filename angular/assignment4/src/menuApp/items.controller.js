(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['item']
function ItemsController(item) {
  var itemList = this;
  itemList.category = item.category.name
  itemList.menuItems = item.menu_items;
  console.log(itemList.menuItems);
}

})();
