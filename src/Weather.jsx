import React, { useState } from "react";
import './style.css';
import axios from "axios";

function WeatherUI() {

    const[city,setcity]=useState("")

    const[weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[description,setdescription]=useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    function getweather()
    {
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cffc5cc47d590cbeddba5936afd24770`)

        weatherData.then(function(success){
            console.log(success)
            setweather(success.data.weather[0].main)
            setdescription(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }



  return (
    <main className="weather-container">
      <section className="weather-card">

        <header className="weather-header">
          <h1>Weather Report</h1>
          <p className="subtitle">Check real-time weather updates</p>
        </header>

        <div className="search-section">
          <input
            onChange={handleCity}
            type="text"
            placeholder="Enter city name..."
            className="search-input"
          />
          <button onClick={getweather} className="search-btn">Search</button>
        </div>

        <div className="weather-display">

          <div className="extra-details">
            <div className="detail-box">
              <span>Weather</span>
              <p>{weather}</p>
            </div>

            <div className="detail-box">
              <span>Temperature </span>
              <p>{temp}</p>
            </div>

            <div className="detail-box">
              <span>Description</span>
              <p>{description}</p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}

export default WeatherUI;