import React from "react";

import ForecastIcons from "./ForecastIcons";


export default function WeatherForecastPreview(props) {
    function hours() {
        let date= new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}℃`;
    }



    return (
        <div className="col">
           {hours()}
          <ForecastIcons code={props.data.weather[0].icon} className="icon" />
         <h5>  {temperature()} </h5>  
        </div>
    );
}