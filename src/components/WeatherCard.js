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
  <section className="WeatherCard" style={{
    backgroundColor: `rgba(150, 150, 150, ${cloudiness / 100})`,
  }}>
    <div className="WeatherImageWrapper">
      <WeatherImage weatherType={weatherType} />
    </div>
    <div className="weatherType">
      <p>
        Weather Type: <strong>{weatherType}</strong>
      </p>
    </div>
    
    <div className="currentTempWrapper">
      <p className="highTemp">
        High Temp: <strong>{highTemp}</strong><span>&deg;F</span>
      </p>
      <p className="currentTemp">
        <strong>{currentTemp}</strong><span>&deg;F</span>
      </p>
      <p className="lowTemp">
        Low Temp: <strong>{lowTemp}</strong><span>&deg;F</span>
      </p>
    </div>
    <div className="weatherWrapper"> 
      <p>
        Cloudiness: <strong>{cloudiness}</strong><span>%</span>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong><span>%</span>
      </p>
      <p>
        Wind Speed: <strong>{windSpeed}</strong><span> mph</span>
      </p>
      <p>
        Weather Description: <strong>{weatherDescription}</strong>
      </p>
    </div>
  </section>
  );
}

export default WeatherCard