import { useEffect, useState } from 'react';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import backgrounds from './components/backgroundArray/backgroundArray';
import './App.css';
import Navbar from './components/Navbar/navbar';
import logo from './mlh-prep.png';
import Search from './components/Navbar/Search';
import useLocation from './hooks/useLocation';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState(null);
  const [results, setResults] = useState(null);
  const [cardBackground, setcardBackground] = useState('Clear');
  const geoLocation = useLocation()
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.code !== 200) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setResults(result);
            setcardBackground(result.weather[0].main);
          }
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="entirePage">
      <img className="bg-image" src={backgrounds[cardBackground][0]} alt="" />
      <Navbar src={logo} />
      <div>
        <h2>Enter a city below 👇</h2>
        <Search setCity={setCity} />
      </div>
      <div className="Results">
        {!isLoaded && <h2 className="loading">Loading...</h2>}
        {console.log(results)}
        {isLoaded && results && (
          <>
            <div className="weather-card">
              <div className="content">
                <div className="place">
                  {results.name}, {results.sys.country}
                </div>
                <div className="top-info">
                  <div className="temp">{results.main.temp}°</div>
                  <div className="conditions">
                    <div className="forecast">
                      {results.weather[0].main} {backgrounds[cardBackground][1]}
                    </div>
                    <div className="temp-feel">
                      Feels like {results.main.feels_like}°C
                    </div>
                  </div>
                </div>
                <div className="coordinates">
                  Lon: {results.coord.lon}° Lat: {results.coord.lat} °
                </div>
                <div className="description">
                  &#40; Condtions in {results.name}:{' '}
                  {results.weather[0].description}, with <br /> temperature
                  ranging from {results.main.temp_min}
                  &nbsp;to {results.main.temp_max} °C &#41;
                </div>
                <div className="bottom-info">
                  <p>
                    <WiBarometer className="we-icon" />
                    <br /> Presurre: {results.main.pressure} hPa
                  </p>
                  <p>
                    <WiHumidity className="we-icon" />
                    <br /> Humidty: {results.main.humidity}%
                  </p>
                  <p>
                    <WiWindy className="we-icon" />
                    <br /> Wind Speed: {results.wind.speed} m/s
                  </p>
                </div>
              </div>
            </div>
            <div className="Map">
              <h2>Map goes here.</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
