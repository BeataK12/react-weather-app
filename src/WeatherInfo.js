import React from "react";
import FormattedDate from "./FormattedDate";
import Units from "./Units";
import WeatherIcons from "./WeatherIcons";



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
              <div className="float-left">
              <WeatherIcons code={props.data.icon} alt={props.data.description}/>
              </div>
            
              <div className="weather-temp float-left">
                <Units celsius={props.data.temperature} />
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