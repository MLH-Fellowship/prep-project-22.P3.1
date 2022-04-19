import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from '../../assets/data/cities.json';
import '../../App.css';

// Create city object from cities array
const cityList = (() => {
  const citiesArray = [];
  cities.forEach((city) => {
    citiesArray.push({ n: city });
  });

  return citiesArray;
})();

const Search = ({ setCity }) => (
  <div id="weather-location-search">
    <ReactSearchAutocomplete
      items={cityList}
      fuseOptions={{
        keys: ['n'],
      }}
      resultStringKeyName="n"
      // eslint-disable-next-line no-shadow
      onSelect={(city) => setCity(city.n)}
    />
  </div>
);

export default Search;
