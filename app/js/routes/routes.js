angular.module('routes', [])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: '../templates/home/index.html',
    controller: 'InitialController'
  })

  .state('page1', {
    url: '/page1',
    templateUrl: '../templates/page1/index.html',
    controller: 'Page1Controller'
  });

  $urlRouterProvider.otherwise("/");
})