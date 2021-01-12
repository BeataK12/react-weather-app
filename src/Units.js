import React, {useState} from "react";

export default function Units(props) {
    let [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    } 

    function convertToCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }

    if (unit === "celsius") {

    return (
      <div>
          <span id="temp">{Math.round(props.celsius)}</span>
                <span className="units">
                  
                    ℃
                  
                  |
               
                   <a href="/" onClick={convertToFahrenheit}> ℉ </a>
                  
                </span>
      </div>
    );
   } else {
      let fahrenheit = (props.celsius * 9)/5 + 32;
       return (
        <div>
          <span id="temp">{Math.round(fahrenheit)}</span>
                <span className="units">
                  
                  <a href="/" onClick={convertToCelsius}> ℃ </a>
                  
                  |
               
                    ℉ 
                  
                </span>
      </div> 
       )
   }
}