import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import "./Weather.css";

export default function Search(props) {
let [weatherData, setWeatherData] = useState({ ready: false});
let [city, setCity] = useState(props.defaultCity);

    function displayWeather(response){
      setWeatherData({
      ready: true,
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
                <button id="locationButton">
                    <i className="fas fa-location-arrow"></i>
                </button>
            </form>
            <WeatherDisplay data={weatherData}/>
    </div>
  );
 } else {
     search();
     return "Loading..."
 }
}