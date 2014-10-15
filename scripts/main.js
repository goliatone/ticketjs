/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'angular': 'vendor/angular/angular.min',
        'angular.route': 'vendor/angular-route/angular-route.min',
        'domReady': 'vendor/domReady/domReady',
        'angular-ui-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-sails': 'vendor/angular-sails/dist/angular-sails',
        'angular-sails-bind': 'vendor/angular-sails-bind/dist/angular-sails-bind',
        'socket-io': 'vendor/socket.io-client/socket.io',
        'sails-io':  'vendor/sails.io.js/dist/sails.io'
       // jquery: 'vendor/jquery/dist/jquery.min',
        //"fancybox": "vendor/fancybox",
        //"iCheck": "vendor/iCheck/icheck.min",
       // "jquery.parallax": "vendor/jquery.parallax/jquery.parallax",
       // "jquery.waypoints": "vendor/jquery-waypoints/waypoints.min",
        //"jquery.queryloader2": "vendor/queryloader2/jquery.queryloader2.min",
       // "eventEmitter": "vendor/eventEmitter/EventEmitter"
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    'shim': {
        'angular': {
            'exports': 'angular'
        },
        'angular.route': ['angular'],
        'angular-ui-bootstrap': ['angular'],
        'sails-io': ['socket-io'],
        'angular-sails': ['sails-io','angular','socket-io','angular-sails-bind']

    },
    deps: ['./bootstrap']
});
