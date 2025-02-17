class WeatherController {
    constructor($scope, weatherService) {
        this.$scope = $scope;
        this.weatherService = weatherService;
        this.favorites = [];
        this.weatherData = null;
        this.errorMessage = '';
    }

    searchWeather(city) {
        this.weatherService.getWeather(city)
            .then(response => {
                this.weatherData = response.data;
                this.errorMessage = '';
            })
            .catch(error => {
                this.errorMessage = 'Error fetching weather data. Please try again.';
                this.weatherData = null;
            });
    }

    addFavorite(city) {
        if (!this.favorites.includes(city)) {
            this.favorites.push(city);
        }
    }
}

WeatherController.$inject = ['$scope', 'weatherService'];
export default WeatherController;