
import './App.css';
import SearchForm from "./SearchForm";
import Main from "./Main";
import Forecast from "./Forecast";


function App() {
  return (
    <div className="App">
    <div className="container">
        <SearchForm />
        <Main />
           <hr width="93%" />
        <Forecast />
     
    </div>
      <small>
      <a href="https://github.com/BeataK12/weather-app" target="_blank">
        Open-source code</a
      >, by Beata Kolbai</small
    >
    </div>
  );
}

export default App;
