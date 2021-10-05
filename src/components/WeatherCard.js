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
        Current Temperature: <strong>{currentTemp}</strong>
      </p>
    </div>
    <div className="weatherWrapper"> 
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        High Temp: <strong>{highTemp}</strong>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong>
      </p>
      <p>
        Low Temp: <strong>{lowTemp}</strong>
      </p>
      <p>
        Weather Type: <strong>{weatherType}</strong>
      </p>
      <p>
        Weather Description: <strong>{weatherDescription}</strong>
      </p>
      <p>
        Wind Speed: <strong>{windSpeed}</strong>
      </p>
    </div>
  </section>
  );
}

export default WeatherCard