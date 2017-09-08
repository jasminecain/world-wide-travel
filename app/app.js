'use strict';

var app = angular.module('worldWideTravel', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/display.html',
    controller: 'BookCtrl'
  }).
  otherwise('/');
});

