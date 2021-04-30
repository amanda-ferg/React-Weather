import React from "react";

export default function WeatherTemperature(props) {
  function convertToFahrenheit(event) {
      event.preventDefault();
      props.setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
      event.preventDefault();
      props.setUnit("celsius");
  }

function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
}

  if (props.unit === "celsius") {
    return(
        <div className="WeatherTemperature">
            <span className="mainTemperature">
                {Math.round(props.celsius)}
            </span>
            <span className="tempType">
                    °C |{" "}
                <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
                    °F
                </a>
            </span>
        </div>
    );
  } else {
      return(
        <div className="WeatherTemperature">
            <span className="mainTemperature">
                {Math.round(fahrenheit())}
            </span>
            <span className="tempType">
                <a href="/" className="celsius" onClick={convertToCelsius}>
                    °C
                </a>
                    {" "}| °F
            </span>
        </div>
    );
  }
}