/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['angular', 'app'], function (angular, app) {
    'use strict';

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/panel', {
            //templateUrl: '/views/index.html',
            controller : 'IndexController'
        });

        $routeProvider.otherwise({
            redirectTo: '/panel'
        });

        $locationProvider.html5Mode(true);

    }]);
});