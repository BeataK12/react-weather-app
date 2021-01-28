import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Main(props) {
 let [weatherData, setWeatherData] = useState({ ready: false });
 let [city, setCity] = useState(props.city);

 function handleResponse(response) {
   console.log(response.data);
   
   setWeatherData({
     ready: true,
     temperature: response.data.main.temp,
     city: response.data.name,
     wind:response.data.wind.speed,
     humidity: response.data.main.humidity,
     description: response.data.weather[0].main,
     icon: response.data.weather[0].icon,
     date: new Date(response.data.dt * 1000)
    });
 }

 function search() {
   let apiKey="03b63b06c7cc75f72aafdcaadbe91a5c";
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);
 }

 function handleSubmit(event) {
   event.preventDefault();
   search();
 }

 function handleCityChange(event) {
   setCity(event.target.value);
 }

 if (weatherData.ready) {
  return (
    <div className="description">
      <div className="input-form">
       <form id="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="on"
              id="search-city"
              onChange={handleCityChange}
            
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="w-100" />
          </div>
          <div className="col-3">
            <button id="current-location" className="btn btn-primary w-100">
              Current
            </button>
          </div>
        </div>
      </form>
      </div>
      <WeatherInfo data={weatherData} />
          <hr width="93%" />
        <Forecast city={weatherData.city} />
     
    </div>
  );
  } else {
   search();
   return "Loading...";
  }
}