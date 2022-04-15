import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './mlh-prep.png';
import News from './News';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState('New York City');
  const [results, setResults] = useState(null);

  // useEffect(() => {
  //   // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
  //   const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=419bc9a18e4a4116b1f9306c7f1595fd`;
  //   fetch(url)
  //     // .then((res) => res.json())
  //     // .then((res) => {
  //     //   console.log(res.status);
  //     //   console.log(res.articles)
  //     //   // alert(res.json().status);
  //     // })
  //     // .then(
  //     //   (result) => {
  //     //     if (result.status !== 200) {
  //     //       setIsLoaded(false);
  //     //     } else {
  //     //       setIsLoaded(true);
  //     //       setResults(result);
  //     //       alert(result.data.articles[0]);
  //     //     }
  //     //   },
  //     //   (err) => {
  //     //     setIsLoaded(true);
  //     //     setError(err);
  //     //   }
  //     // );
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         if (result.status !== "200") {
  //           setIsLoaded(false);
  //         } else {
  //           setIsLoaded(true);
  //           setResults(result);
  //           console.log(result.data.articles);
  //         }
  //       },
  //       (err) => {
  //         setIsLoaded(true);
  //         setError(err);
  //       }
  //     );
  // }, [city]);
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather&apiKey=419bc9a18e4a4116b1f9306c7f1595fd'
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
        console.log('hie');
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
     
      {' '}
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <img className="logo" src={logo} alt="MLH Prep Logo" />
          <div>
          <button type='button' onClick={fetchNews}>FetchNews</button>
            <h2>Enter a city below 👇</h2>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
             <News city={city}/>
            <div className="Results">
              {/* {!isLoaded && <h2>Loading...</h2>} */}
              {/* {console.log(results)} */}

                  {/* <h3>{results.weather[0].main}</h3> */}
                  
                  {/* <p>Feels like {results.main.feels_like}°C</p> */}
                  {/* <i> */}
                    {/* <p>
                      {results.name}, {results.sys.country} */}
                    {/* </p> */}
                  {/* </i> */}

            </div>
          </div>
        </div>
      )}
    </div>
  );

  // return(
  // //   <div>
  // //   {news.map((value, index) => (
  // //     <div key={0}> {value.title}</div>
  // //   ))}
  // // </div>
  // <>
  // <News/>
  // </>
  // );
  
}

export default App;
