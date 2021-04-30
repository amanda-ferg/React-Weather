import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Search(props) {
let [weatherData, setWeatherData] = useState({ ready: false});
let [city, setCity] = useState(props.defaultCity);
const [unit, setUnit] = useState("celsius");

    function displayWeather(response){
      setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      });
    }

    function search() {
        const apiKey = `523153ffc9ade9361b141e46da936c85`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    function getCurrentLocation(position) {
        const apiKey = `523153ffc9ade9361b141e46da936c85`;
        let units = "metric";
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiGeoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
        axios.get(apiGeoUrl).then(displayWeather);
  }

    function getGeolocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    }

    if (weatherData.ready) {
    return(
        <div className="searchCity">
                <form id="search-form" onSubmit={handleSubmit}>
                    <input
                        type="search" 
                        placeholder="Search Your City"
                        autoComplete="off"
                        autoFocus="on"
                        id="search-input-text"
                        onChange={updateCity}
                    />
                    <input type="submit" value="Search" id="search" />
                    <button className="locationButton"
                            onClick={getGeolocation}>
                        <i className="fas fa-location-arrow"></i>
                    </button>
                </form>
                <WeatherDisplay data={weatherData} unit={unit} setUnit={setUnit} />
                <hr />
                <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );
    } else {
        search();
        return "Loading..."
    }
}