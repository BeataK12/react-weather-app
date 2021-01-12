
import './App.css';
import Main from "./Main";
import Forecast from "./Forecast";


function App() {
  return (
    <div className="App">
    <div className="container">
        <Main city="London"/>
           <hr width="93%" />
        <Forecast />
     
    </div>
      <small>
      <a href="https://github.com/BeataK12/react-weather-app" target="_blank" rel="noreferrer">
        Open-source code</a
      >, by Beata Kolbai</small
    >
    </div>
  );
}

export default App;
