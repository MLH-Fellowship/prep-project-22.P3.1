import { useEffect, useState } from "react";
import backgrounds from "./backgroundArray";
import './App.css';
import logo from './mlh-prep.png'
import { IconBase } from "react-icons";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [cardBackground, setcardBackground] = useState("Clear");
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=" + process.env.REACT_APP_APIKEY)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            setResults(result);
            setcardBackground(result.weather[0].main)
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [city])

  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else {
    return <>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇</h2>
        <input
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)} />


        <div className="Results">
          {!isLoaded && <h2>Loading...</h2>}
          {console.log(results)}
          {isLoaded && results && <>
          <div className="WeatherCard">
           
            <div className="content">
              <div className="top-info">
                <div className="temp">{results.main.temp}°</div>
                <div className="conditions">
                  <div className = "forecast">{results.weather[0].main} {backgrounds[cardBackground][1]}</div>
                  <div className = "temp-feel">Feels like {results.main.feels_like}°C</div>
                </div>
              </div>

              <div className="bottom-info">
                <p> Presurre: {results.main.pressure}hPa </p>
                <p> Humidty: {results.main.humidity}% </p>
                <p> Wind Speed: {results.wind.speed} m/s </p>
              </div>
              <div className="place"> {results.name}, {results.sys.country}</div>
            </div>
            <img className = "bg-image"src = {backgrounds[cardBackground][0]} ></img>
          </div>
          

            <div className="Map">
              <h3>{results.weather[0].main}</h3>
              <p>Feels like {results.main.feels_like}°C</p>
              <i><p>{results.name}, {results.sys.country}</p></i>
            </div>
          </>}
        </div>
      </div>
    </>

  }
}

export default App;
