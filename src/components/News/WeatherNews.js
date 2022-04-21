/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useEffect, useState } from 'react';
import './WeatherNews.css';
import Carousel from 'react-bootstrap/Carousel';
import response from './WeatherNews.json';

function WeatherNews(city) {
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchNews = () => {
    setNews(response.data.articles);
    setIsLoaded(true);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="newsSection" id="News">
      <h3>--Your News Section-- </h3>
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

