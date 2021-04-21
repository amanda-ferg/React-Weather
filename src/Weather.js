import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import "./Weather.css";

export default function Search() {
let [weatherData, setWeatherData] = useState({ ready: false});
let [city, setCity] = useState("");

    function displayWeather(response){
      setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }

    
    function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `523153ffc9ade9361b141e46da936c85`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

 if (weatherData.ready) {
  return(
    <div className="Weather">
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
        </div>
        <h1>{city}</h1>
        <h2><CurrentDate date={weatherData.date} /></h2>
        <div className="row">
            <div className="col">
                <li>
                    <span className="mainTemperature" id="temperature">
                        {Math.round(weatherData.temperature)}
                    </span>
                    <span className="tempType">
                    <a href="/" className="celsius" id="celsiusLink">
                        °C
                     </a>
                        |
                    <a href="/" className="fahrenheit" id="fahrenheitLink">
                        °F
                    </a>
                    </span>
                </li>
                <li id="description">{weatherData.description}</li>
            </div>
            <div class="col">
                <img className="icon" id="weatherIcon" alt=""/>
             </div>
            <div className="col">
                <li>
                    Humidity: {weatherData.humidity}%
                </li>
                <li>
                    Wind: {Math.round(weatherData.wind)} km/h
                </li>
            </div>
        </div>
    </div>
  );
 } else {
     return (
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
            <div>Searching...</div>
        </div> 
     );
 }
}