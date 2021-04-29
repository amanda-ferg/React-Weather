import React from "react";
import Weather from "./Weather";
import "./App.css";
import background from "./pinkclouds.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box" style={{ backgroundImage: `url(${background})` }}>
          <Weather defaultCity="Atlanta"/>
        </div>
          <footer>
            <a href="https://github.com/amanda-ferg/React-Weather" className="link">
              Open-source code
            </a>
              {" "} by <a href="https://www.linkedin.com/in/amanda-ferg-01b263204/" className="link">
              Amanda Ferg
            </a>
          </footer>
      </div>
    </div>
  );
}

