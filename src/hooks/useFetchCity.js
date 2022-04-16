import React, { useState, useEffect } from 'react';

const useFetchCity = (lat, lng) => {
  const [geoCity, setGeoCity] = useState({
    city: '',
    countryCode: '',
  });

  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  // eslint-disable-next-line no-use-before-define
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_APIKEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setGeoCity({
            city: result.name,
            countryCode: result.sys.country,
          });
        }
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, [lat, lng]);

  return geoCity;
};

export default useFetchCity;
