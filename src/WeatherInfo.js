import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li id="date"><FormattedDate date={props.data.date}/>
       </li>
        <li id="description" className="text-capitalize">{props.data.description}</li>
      </ul>
       <div className="row">
          <div className="col-6">
            <div className="image-temp">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="70px"
                className="weather-icon float-left"
                id="icon"
              />
              <div className="float-left">
               <span id="temp">{Math.round(props.data.temperature)}</span>
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
                Humidity:{props.data.humidity} <span id="humidity"></span>%
              </li>
              <li>
                Wind speed:{props.data.wind}<span id="wind"></span>km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
    );
}