'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('dvbp', [
    'main.controllers', 'main.directives', 'where.controllers',
    'ngRoute', 'uiGmapgoogle-maps'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/main-page/main-page.html'
    }).when('/where', {
        templateUrl: 'app/where-page/where-page.html',
        controller: 'WhereCtrl'
    }).when('/about', {
        templateUrl: 'app/about-page/about-page.html'
    }).otherwise(
        {redirectTo: '/'}
    );
}]);
