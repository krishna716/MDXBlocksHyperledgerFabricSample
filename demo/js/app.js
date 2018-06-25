var application = angular.module('angular_app',['ngRoute']);

application.controller('angular_controller', function ($scope,$location) {

     $scope.form  = {
         username : '',
         password : '',
         type : '',
     }

    $scope.register  = {
        username : '',
        password : '',
        confirmPassword : '',
    }

     $scope.login = function () {
         $location.path('/dashboard');
     }

    $scope.register = function () {
        $location.path('/register');
    }
     
     $scope.logout = function () {
         $location.path('/login');
     }

    $scope.dashboard = function () {
        $location.path('/dashboard');
    }

     $scope.manufacturer = function () {
         $location.path('/manufacturer');
     }

    $scope.vendor = function () {
        $location.path('/vendor');
    }

    $scope.dsCentre = function () {
        $location.path('/dsCentre');
    }

    $scope.store = function () {
        $location.path('/store');
    }


});