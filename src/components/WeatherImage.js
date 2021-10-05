import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons"

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case 'Cloud':
      return <FontAwesomeIcon icon={faCloud} />
    case 'Clear':
      return <FontAwesomeIcon icon={faSun} />
    case 'Rain' || 'Thunderstroms':
      return <FontAwesomeIcon icon={faCloudRain} />
    case 'Snow':
      return <FontAwesomeIcon icon={faSnowflake} />
    default:
      return <FontAwesomeIcon icon={faCloud} />
  }
}

export default WeatherImage;