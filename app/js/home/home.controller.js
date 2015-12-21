angular.module('home.controller', [])

.controller('InitialController',  InitialController);

InitialController.$inject = ['$scope'];

function InitialController($scope) {

  var vm = this;

  vm.helloWorld = "Hello World from HOMEPAGE!";

  console.log("Hello Dear! It's the Homepage :D")
}