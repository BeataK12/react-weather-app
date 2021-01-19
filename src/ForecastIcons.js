import React from "react";
import { WeatherIcon } from "weather-react-icons";

export default function ForecastIcons(props) {
  const codeMapping = {
    "01d": 32,
    "01n": 31,
    "02d": 34,
    "02n": 33,
    "03d": 26,
    "03n": 26,
    "04d": 28,
    "04n": 27,
    "09d": 35,
    "09n": 35,
    "10d": 11,
    "10n": 11,
    "11d": 3,
    "11n": 3,
    "13d": 14,
    "13n": 13,
    "50d": 20,
    "50n": 20,

  }
  
  return (<div><WeatherIcon iconId={codeMapping[props.code]} name="yahoo" className="iconSmall" /></div>);

}