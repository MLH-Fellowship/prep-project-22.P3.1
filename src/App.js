import { useEffect, useState } from "react";
import backgrounds from "./backgroundArray";
import './App.css';
import logo from './mlh-prep.png'

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
            <div className="WeatherCard" style= {{backgroundImage: `url(${backgrounds[cardBackground]})`}}>
              <div className="info">
                <div className="top-info">
                  <h1 className="temp">{results.main.temp} °C</h1>
                  <div className="conditions">
                    <p className = "forecast">{results.weather[0].main}</p>
                    <p className = "temp-feel">Feels like {results.main.feels_like}°C</p>
                  </div>
                </div> 
                <i><p>{results.name}, {results.sys.country}</p></i>
              </div>
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
