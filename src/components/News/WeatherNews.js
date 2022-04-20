/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherNews.css';
import Carousel from 'react-bootstrap/Carousel';

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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetchNews();
    fetchNewsForYou();
  }, []);

  return (
    <div className="newsSection" id="News">
      <h3>News for you - </h3>
      {isLoaded && news && (
        <Carousel
          className="newsCarousel"
          activeIndex={index}
          onSelect={handleSelect}
          fade
        >
          {news.map((newsElement) => (
            <Carousel.Item className="newsItem" interval={5000}>
              <img
                className="d-block w-100"
                src={
                  newsElement.urlToImage !== undefined
                    ? newsElement.urlToImage
                    : '../../assets/images/newsImage.jpg'
                }
                alt="imageThumbnail"
              />
              <Carousel.Caption>
                <h5 className="authorTitle">
                  {newsElement.author === null
                    ? 'Anonymous'
                    : newsElement.author}
                </h5>
                <p className="descriptionNews">{newsElement.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default WeatherNews;
