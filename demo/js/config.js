application.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'partials/login.html',
        controller : 'angular_controller',
    }).when('/dashboard',{
        templateUrl : 'partials/dashboard.html',
        controller : 'angular_controller',
    }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'angular_controller',
    }).when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'angular_controller',
    }).when('/manufacturer', {
        templateUrl: 'partials/manufacturer.html',
        controller: 'angular_controller',
    }).when('/vendor', {
        templateUrl: 'partials/vendor.html',
        controller: 'angular_controller',
    }).when('/dsCentre', {
        templateUrl: 'partials/dsCentre.html',
        controller: 'angular_controller',
    }).when('/store', {
        templateUrl: 'partials/store.html',
        controller: 'angular_controller',
    })
});