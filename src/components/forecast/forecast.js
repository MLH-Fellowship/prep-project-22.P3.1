/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import useLocation from '../../hooks/useLocation';
import WeatherCard from './card';

function ForecastCarousel() {
  const [items, setItems] = useState(null);
  const [selector, setSelector] = useState(['Daily', 'Hourly']);
  const [selectedValue, setSelectedValue] = useState('Daily');
  const geoLocation = useLocation();
  const [results, setResults] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  // if(geoLocation.coordinates.lat !== '' & geoLocation.coordinates.lng !== ''){

  // }
  useEffect(() => {
    const urlGeo = `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.coordinates.lat}&lon=${geoLocation.coordinates.lng}&units=metric&exclude=current,alerts,minutely&appid=${process.env.REACT_APP_APIKEY}`;
    fetch(urlGeo)
      .then((res) => res.json())
      .then(
        (result) => {
          if (
            result.cod === '400' ||
            result.cod === '401' ||
            result.cod === '404'
          ) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setItems(result);
          }
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, [geoLocation.coordinates.lat, geoLocation.coordinates.lng]);
  console.log(items);
  return (
    <>
      <div className="selector">
        <span className="label">Forecast mode: </span>
        {/* eslint-disable jsx-a11y/no-onchange */}
        <select
          onChange={(e) => {
            setSelectedValue(e.target.value);
            console.log('This is the e ', e.target.value);
          }}
        >
          {selector.map((value) => (
            <option key={value} value={value} className="option-card">
              {value}
            </option>
          ))}
        </select>
      </div>
      <Carousel
        cols={4}
        rows={1}
        gap={5}
        loop={false}
        hideArrow={false}
        showDots
        responsiveLayout={[
          {
            breakpoint: 550,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
          },
          {
            breakpoint: 800,
            cols: 3,
            rows: 1,
            gap: 0,
            loop: true,
          },
        ]}
      >
        {selectedValue === 'Daily' &&
          items !== null &&
          items.daily.map((item) => (
            <Carousel.Item key={item}>
              <WeatherCard value={selectedValue} data={item} />
            </Carousel.Item>
          ))}
        {selectedValue === 'Hourly' &&
          items !== null &&
          items.hourly.map((item) => (
            <Carousel.Item key={item}>
              <WeatherCard value={selectedValue} data={item} />
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
}

export default ForecastCarousel;
