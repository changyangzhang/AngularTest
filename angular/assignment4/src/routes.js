(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/menuApp/templates/categories-list.template.html',
    controller: 'CategoriesListController as catList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(function(result){
          return result.data
        });
      }]
    }
  })

  .state('itemDetail', {
    url: '/category/{categoryShortName}',
    templateUrl: 'src/menuApp/templates/items-list.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (result) {
                  return result.data
                });
            }]
    }
  });
}

})();
