import React from "react";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";
import background from "./pinkclouds.png";

export default function App() {
  return (
    <div className="App">
      <div className="box" style={{ backgroundImage: `url(${background})` }}>
        <Search />
        <City />
        <Weather />
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

