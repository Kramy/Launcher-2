var app = angular.module('configuration-module', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider.when('/', {
        templateURL: 'configuration-launcher.html'
    }).when('/configuration-launcher', {
        templateURL: 'configuration-launcher.html'
    }).when('/configuration-application', {
        templateURL: 'configuration-application.html'
    }).otherwise({
        redirectTo: '/'
    })
});