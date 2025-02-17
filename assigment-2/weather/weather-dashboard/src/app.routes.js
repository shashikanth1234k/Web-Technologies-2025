angular.module('weatherDashboard', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'WeatherController'
    })
    .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);