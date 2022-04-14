import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import logo from './mlh-prep.png';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('New York City');
  const [results, setResults] = useState(null);

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
          }
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, [city]);
  return (
    <div>
      {' '}
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="entirePage">
          <Navbar src={logo} />
          <div>
            <div className="Results">
              {!isLoaded && <h2>Loading...</h2>}
              {console.log(results)}
              {isLoaded && results && (
                <>
                  <h3>{results.weather[0].main}</h3>
                  <p>Feels like {results.main.feels_like}°C</p>
                  <i>
                    <p>
                      {results.name}, {results.sys.country}
                    </p>
                  </i>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
