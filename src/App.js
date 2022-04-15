import { useEffect, useState } from 'react';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import backgrounds from './components/backgroundArray/backgroundArray';
import './App.css';
import Navbar from './components/Navbar/navbar';
import WeatherCard from './components/backgroundArray/weatherCard';
import logo from './mlh-prep.png';
import Search from './components/Navbar/Search';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState(null);
  const [results, setResults] = useState(null);
  const [cardBackground, setcardBackground] = useState('Clear');
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.cod !== 200) {
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
        {isLoaded && results && (
          <>
            <WeatherCard results={results} cardBackground={cardBackground} />
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
