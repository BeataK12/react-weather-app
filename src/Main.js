import React from "react";

export default function Main() {
  return (
    <div className="description">
      <h1 id="city">London</h1>
      <ul>
        <li id="date">06/12/2020</li>
        <li id="description">Foggy</li>
      </ul>
       <div className="row">
          <div className="col-6">
            <div className="image-temp">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="overcast cloud"
                width="70px"
                className="weather-icon float-left"
                id="icon"
              />
              <div className="float-left">
               <span id="temp">12</span>
                <span className="units">
                  <a href="#" id="celsius" className="active">
                    ℃
                  </a>
                  |
                  <a href="#" id="fahrenheit">
                    ℉
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity"></span>%
              </li>
              <li>
                Wind speed:<span id="wind"></span>km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}