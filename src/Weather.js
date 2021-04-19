import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Search() {
    function handleResponse(response){
      console.log(response.data);
  }

    const apiKey = "586785607cf8eae0d989a3c8a3e3f7fb";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
  return(
    <div className="Weather">
        <div className="searchCity">
            <form id="search-form">
                <input
                    type="text"
                    placeholder="Search Your City"
                    autoComplete="off"
                    autoFocus="on"
                    id="search-input-text"
                />
                <input type="submit" value="Search" id="search" />
                <button id="locationButton">
                    <i className="fas fa-location-arrow"></i>
                </button>
            </form>
        </div>
        <h1>Atlanta</h1>
        <h2>Friday 10:00</h2>
        <div className="row">
            <div className="col">
                <li>
                    <span className="mainTemperature" id="temperature">
                        27
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
                <li id="description">Windy</li>
            </div>
            <div class="col">
                <img className="icon" id="weatherIcon" alt=""/>
             </div>
            <div className="col">
                <li>
                    Humidity: <span id="humidity"></span>%
                </li>
                <li>
                    Wind: <span id="wind"></span> km/h
                </li>
            </div>
        </div>
    </div>
  );
}