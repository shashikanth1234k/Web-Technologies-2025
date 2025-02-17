class WeatherService {
    constructor($http) {
        this.$http = $http;
        this.apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }

    getWeather(city) {
        const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
        return this.$http.get(url)
            .then(response => response.data)
            .catch(error => {
                throw new Error('Error fetching weather data: ' + error.message);
            });
    }
}

angular.module('weatherDashboard')
    .service('WeatherService', WeatherService);