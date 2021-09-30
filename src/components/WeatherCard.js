import React from "react";

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
    <div className="currentTempWrapper">
      <p className="currentTemp">
        currentTemp: <strong>{currentTemp}</strong>
      </p>
    </div>
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
  </section>
  );
}

export default WeatherCard