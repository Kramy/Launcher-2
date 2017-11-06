require("angular");
require("angular-route");

var app = angular.module('configuration-module', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider.when('/', {
        templateUrl: 'configuration-launcher.html'
    }).when('/configuration-launcher', {
        templateUrl: 'configuration-launcher.html'
    }).when('/configuration-application', {
        templateUrl: 'configuration-application.html'
    }).otherwise({
        redirectTo: '/'
    })
});