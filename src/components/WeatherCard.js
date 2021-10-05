import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard( {
  cloudiness, 
  currentTemp, 
  highTemp, 
  humidity, 
  lowTemp,
  weatherDescription, 
  weatherType = 'Unknown', 
  windSpeed
}) {
  return (
  <section className="WeatherCard">
    <div className="WeatherImageWrapper">
      <WeatherImage weatherType={weatherType} />
    </div>
    
    <div className="currentTempWrapper">
      <p className="currentTemp">
        currentTemp: <strong>{currentTemp}</strong>
      </p>
    </div>
    <div className="weatherWrapper"> 
      <p>
        cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        highTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        humidity: <strong>{humidity}</strong>
      </p>
      <p>
        lowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        weatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        weatherDescription: <strong>{weatherDescription}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
    </div>
  </section>
  );
}

export default WeatherCard