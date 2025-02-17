# Weather Dashboard Application

This is a simple Weather Dashboard application built using AngularJS. It allows users to search for weather information by city and view current weather conditions.

## Project Structure

```
weather-dashboard
├── src
│   ├── app.js
│   ├── controllers
│   │   └── weatherController.js
│   ├── services
│   │   └── weatherService.js
│   ├── views
│   │   ├── home.html
│   │   └── weather.html
│   ├── styles
│   │   └── main.css
│   ├── index.html
│   └── app.routes.js
├── package.json
├── bower.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd weather-dashboard
   ```

2. **Install dependencies:**
   - For npm:
     ```
     npm install
     ```
   - For Bower:
     ```
     bower install
     ```

3. **Run the application:**
   - You can use a local server to serve the `index.html` file. For example, you can use `http-server` or any other static server.

## Usage

- Open the application in your web browser.
- Use the search bar on the home page to enter a city name and click the search button to fetch weather data.
- The weather details will be displayed on the weather page, including temperature, humidity, and weather conditions.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.