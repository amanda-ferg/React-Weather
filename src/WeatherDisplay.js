import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDisplay(props) {
    return(
        <div className="WeatherDisplay">
            <h1>{props.data.city}</h1>
            <h2><CurrentDate date={props.data.date} /></h2>
            <div className="row">
                <div className="col">
                    <li>
                        <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </div>
                <div class="col">
                    <WeatherIcon 
                        code={props.data.icon}
                        size={64}
                        />
                </div>
                <div className="col">
                    <li>
                        Humidity: {props.data.humidity}%
                    </li>
                    <li>
                        Wind: {Math.round(props.data.wind)} km/h
                    </li>
                </div>
            </div>
        </div>
    );
}