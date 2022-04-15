import { useEffect, useState } from 'react';
import './App.css';
import logo from './mlh-prep.png';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('New York');
  const [results, setResults] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState({lon: -74.006, lat: 40.7143});
  const [alerts, setAlerts] = useState(null);

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
            setCityCoordinates({
              lat: result.coord.lat,
              lon: result.coord.lon,
            });
          }
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      )
      .then(
        () => {
            if(isLoaded) {
              const alertUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&exclude=&appid=${process.env.REACT_APP_APIKEY}`
              fetch(alertUrl)
              .then((res) => res.json())
              .then(
                (result) => {
                  if(result.alerts) {
                    const rawDesciption = result.alerts[0].description
                    const divisions = rawDesciption.split("*")
                    console.log(rawDesciption)
                    divisions.forEach(element => {
                      // const trimmed = element.trim()
                      const newText = element.replace('...', ' ').replace(/\s+/g, ' ').trim()
                      if(newText.startsWith('WHAT')) {
                        console.log(newText)
                      } else if(newText.startsWith('WHERE')) {
                        console.log(newText)
                      } else if(newText.startsWith('WHEN')) {
                        console.log(newText)
                      } else if(newText.startsWith('IMPACTS')) {
                        console.log(newText)
                      }
                     
                      console.log(newText)
                    });
                  } else {
                    console.log("bye")
                  }
                },
                (err) => {
                  console.log(err)
                }
              )
            }


          // const alertUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&exclude=&appid=${process.env.REACT_APP_APIKEY}`
          // fetch(alertUrl)
          //   .then((res) => res.json())
          //   .then(
          //     (result) => {
          //       console.log(result)
          //     },
          //     (err) => {
          //       console.log("hi")
          //     }
          //   )
        }
      )
    
    
        

    
    // if(isLoaded) {
    //   const urlAlerts = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&exclude=&appid=${process.env.REACT_APP_APIKEY}`
    //         fetch(urlAlerts)
    //           .then((onecall) => onecall.json())
    //           .then(
    //             (onecall) => {
    //               if(onecall.alerts === undefined){
    //                 console.log("doesn't exist", onecall)
    //               } else {
    //                 console.log("exists", onecall)
    //               }
    //             }
    //           )
    // }

  }, [city, isLoaded, cityCoordinates.lat, cityCoordinates.lon, alerts]); 

  return (
    <div>
      {' '}
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <img className="logo" src={logo} alt="MLH Prep Logo" />
          <div>
            <h2>Enter a city below 👇</h2>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <div className="Results">
              {!isLoaded && <h2>Loading...</h2>}
              {isLoaded && results && (
                <>
                  <h3>{results.weather[0].main}</h3>
                  <p>Feels like {results.main.feels_like}°C</p>
                  <i>
                    <p>
                      {results.name}, {results.sys.country}
                    </p>
                
                    {alerts !== null && alerts !== undefined && (
                      <>
                        <p>
                          {alerts[0].event}
                        </p>
                        <p>
                          {alerts[0].description}
                        </p>
                      </>
                    )}
                    
                    
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
