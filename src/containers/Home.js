import React, { useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

const API_KEY = `3ecac4d4d92bf6e0ed98c5cc20067ae9`;

// URL Search Params...
// localhost:3000/?city=paris
// Abstract away URL Search param here to make it eaiser to use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    // Get Weather Data from Weather API
    if (city) {
      axios
      .get(URL)
      .then(function (response) {
        // Successful request... set as weather data
        setWeatherData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error)
      });
    }
  }, [URL, city]);

  const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherDescription, weatherType, windSpeed } = useMemo(() => {
    if (!weatherData) return {};
    return ({
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round((weatherData.main.temp-273.15)*(9/5)+32),
      highTemp: Math.round((weatherData.main.temp_max-273.15)*(9/5)+32),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round((weatherData.main.temp_min-273.15)*(9/5)+32),
      weatherDescription: weatherData.weather[0].description,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    })
  }, [weatherData]);

  return (
    <main className="App">
      <header className="citycontainer">
        <p className="cityone">
          <a href="/?city=los angeles" className={city === 'los angeles' && 'Active'}>Los Angeles</a>
        </p>
        <p className="citytwo">
          <a href="/?city=london" className={city === 'london' && 'Active'}>London</a>
        </p>
        <p className="citythree">
          <a href="/?city=singapore" className={city === 'singapore' && 'Active'}>Singapore</a>
        </p>
        <p className="cityfour">
          <a href="/?city=hongkong" className={city === 'hongkong' && 'Active'}>Hong Kong</a>
        </p>
      </header>
      <h1 className="WeatherAppHeader">{city}</h1>
      <WeatherCard 
        cloudiness={cloudiness}
        currentTemp={currentTemp} 
        highTemp={highTemp} 
        humidity={humidity} 
        lowTemp={lowTemp}
        weatherDescription={weatherDescription} 
        weatherType={weatherType} 
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;