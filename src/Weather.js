import React from "react";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  let weatherData = {
    city: "Portland",
    temperature: 70,
    date: "Tuesday 3:00pm",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 50,
    wind: 10,
  };

  return (
    <div className="weatherSearch">
      <form className="weatherWrapper">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              autoComplete="off"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-secondary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li> Last updated:{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="clearfix weather-temperature">
            <WeatherIcon />
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong> {weatherData.temperature}</strong>
              <span className="units">°F</span>
              <hr />
              <hr />
            </div>
          </div>
        </div>
        <div className="col-9">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
<footer>
  <a href="https://github.com/whvtitiz/weather-react.git" rel="noreferrer">
    Open-source code on GitHub
  </a>
  and
  <a href="https://gleeful-gingersnap-53cb24.netlify.app/" rel="noreferrer">
    hosted on Netify
  </a>
  , coded by Whitney Wiles
</footer>;
