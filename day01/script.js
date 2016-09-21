(function(angular) {

"use strict";

var app = angular.module("app", []);

app.controller("hello", function($scope) {
  $scope.greeting = "Hello world";
  $scope.imgsrc = "http://i.imgur.com/e96JimP.jpg";
});

app.controller("hola", function($scope) {
  $scope.greeting = "Hola mundo";
});

app.controller("petController", function(){
var vm = this;
vm.taketopound = function(name) {
alert(name + " taken to pound!");
};
});

app.controller("dogController", function(){
  var vm = this;
  vm.name = "Muffins";
  vm.buttontext = "GET RID OF THE MUTT";
  vm.isonaleash = true;
});

app.controller("fishController", function(){
  var vm = this;
  vm.name = "Blubgub";
  vm.buttontext = "FISH TEST";
  vm.isonaleash = true;
});

})(window.angular);
