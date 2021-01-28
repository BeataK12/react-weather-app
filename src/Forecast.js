import React, {useState} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name) {
    
    return (
      <div className="forecast row">
          <WeatherForecastPreview data={forecast.list[0]} />
          <WeatherForecastPreview data={forecast.list[1]} />
          <WeatherForecastPreview data={forecast.list[2]} />
          <WeatherForecastPreview data={forecast.list[3]} />
          <WeatherForecastPreview data={forecast.list[4]} />
          <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
   let apiKey="03b63b06c7cc75f72aafdcaadbe91a5c";
   let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
   axios.get(url).then(handleForecastResponse);

   return null;
  }
  
}