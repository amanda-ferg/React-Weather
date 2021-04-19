import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";
import background from "./pinkclouds.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box" style={{ backgroundImage: `url(${background})` }}>
          <Weather />
          <hr />
          <Forecast />
        </div>
          <footer>
            <a href="https://github.com/amanda-ferg/React-Weather" class="link">
              Open-source code
            </a>
              {" "} by Amanda Ferg
          </footer>
      </div>
    </div>
  );
}

