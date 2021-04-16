import React from "react";
import "./Search.css";

export default function Search() {
  return (
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
  );
}
