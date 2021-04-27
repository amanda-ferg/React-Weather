import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      let days = ["Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat"]

    return days[day];
  }
  
  function maxTemperatureCelsius() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    } 

  function minTemperatureCelsius() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    } 

  function maxTemperatureFahrenheit() {
        let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
        return `${temperature}`;
    }

  function minTemperatureFarhenheit() {
        let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
        return `${temperature}`;    
    }

    if (props.unit !== "celsius") {    
        return(
            <div>
                <li>{day()}</li>
                <li><WeatherIcon code={props.data.weather[0].icon} size={36} /></li>
                <li><strong>High: {maxTemperatureFahrenheit()}°</strong></li>
                <li>Low: {minTemperatureFarhenheit()}°</li>
            </div>
        );
    } else {
        return(
            <div>
                <li>{day()}</li>
                <li><WeatherIcon code={props.data.weather[0].icon} size={36} /></li>
                <li><strong>High: {maxTemperatureCelsius()}°</strong></li>
                <li>Low: {minTemperatureCelsius()}°</li>
            </div>
        );
    }
}