import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Main() {

 let [weatherData, setWeatherData] = useState({ ready: false });

 function handleResponse(response) {
   console.log(response.data);
   
   setWeatherData({
     ready: true,
     temperature: response.data.main.temp,
     city: response.data.name,
     wind:response.data.wind.speed,
     humidity: response.data.main.humidity,
     description: response.data.weather[0].description,
     iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
     date: new Date(response.data.dt * 1000)
    });

  
 }


 if (weatherData.ready) {
  return (
    <div className="description">
      <h1 id="city">{weatherData.city}</h1>
      <ul>
        <li id="date"><FormattedDate date={weatherData.date}/>
       </li>
        <li id="description" className="text-capitalize">{weatherData.description}</li>
      </ul>
       <div className="row">
          <div className="col-6">
            <div className="image-temp">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="70px"
                className="weather-icon float-left"
                id="icon"
              />
              <div className="float-left">
               <span id="temp">{Math.round(weatherData.temperature)}</span>
                <span className="units">
                  
                    ℃
                  
                  |
               
                    ℉
                  
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:{weatherData.humidity} <span id="humidity"></span>%
              </li>
              <li>
                Wind speed:{weatherData.wind}<span id="wind"></span>km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
  } else {
   let apiKey="03b63b06c7cc75f72aafdcaadbe91a5c";
   let city="London";
   let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);

   return "Loading...";
  }
}