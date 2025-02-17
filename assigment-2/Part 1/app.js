var app = angular.module("weatherApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "weather.html",
            controller: "WeatherController"
        })
        .otherwise({ redirectTo: "/" });
});

app.controller("WeatherController", function($scope, $http) {
    $scope.favorites = [];

    $scope.getWeather = function(cityName) {
        var city = cityName || $scope.city;
        var apiKey = "7f9473eb4434d789e6592eadb2d91074";
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $http.get(url).then(function(response) {
            $scope.weather = response.data;
            $scope.error = "";
        }, function(error) {
            $scope.weather = null;
            $scope.error = "City not found!";
        });
    };

    $scope.addFavorite = function(city) {
        if (!$scope.favorites.includes(city)) {
            $scope.favorites.push(city);
        }
    };
});
