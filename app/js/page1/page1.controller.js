angular.module('page1.controller', [])

.controller('Page1Controller',  Page1Controller);

Page1Controller.$inject = ['$scope'];

function Page1Controller($scope) {

  var vm = this;

  vm.helloWorld = "Hello World from Page1!";

  console.log("Hello Dear! It's the page1 :D")
}