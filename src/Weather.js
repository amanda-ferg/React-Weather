import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
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
        <div class="col">
          <img className="icon" id="weatherIcon" alt="icon"/>
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