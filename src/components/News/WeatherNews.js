/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherNews.css';

function WeatherNews(city) {
  const [news, setNews] = useState([]);
  const [forYouNews, setForYouNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchNewsForYou = () => {
    // const strToSearch = "https://newsapi.org/v2/everything?q=weather " + {city} + "&apiKey=419bc9a18e4a4116b1f9306c7f1595fd"
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather mumbai&apiKey=419bc9a18e4a4116b1f9306c7f1595fd'
      )
      .then((response) => {
        setForYouNews(response.data.articles);
        console.log('hie');
        setIsLoaded(true);
      });
  };

  const fetchNews = () => {
    // const strToSearch = "https://newsapi.org/v2/everything?q=weather " + {city} + "&apiKey=419bc9a18e4a4116b1f9306c7f1595fd"
    axios
      .get(
        'https://newsapi.org/v2/everything?q=weather&apiKey=419bc9a18e4a4116b1f9306c7f1595fd'
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
        setIsLoaded(true);
        console.log('hie');
      });
  };

  useEffect(() => {
    fetchNews();
    fetchNewsForYou();
  }, []);

  return (
    <div>
      {isLoaded && news && (
        <div className="newsElement">
          {forYouNews.map((newsElement) => (
            <div className="newsCard">
              <div className="newsProfile">
                <span className="avatar">N</span>
                <div className="profileDetails">
                  <h6>
                    {newsElement.author === null
                      ? 'Anonymous'
                      : newsElement.author}
                  </h6>
                  <p>{newsElement.publishedAt}</p>
                </div>
              </div>
              <div>
                <img
                  src={
                    newsElement.urlToImage !== undefined
                      ? newsElement.urlToImage
                      : '../../assets/images/newsImage.jpg'
                  }
                  alt={newsElement.author}
                  className="thumbnail"
                />
              </div>
              <p className="newsTitle">{newsElement.title}</p>
              <p className="newsDescription" key={newsElement.publishedAt}>
                {newsElement.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherNews;
