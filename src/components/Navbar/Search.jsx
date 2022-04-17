import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from './cities';
import '../../App.css';
import './Search.css';

// Create city object from cities array
const city = (() => {
  const citiesArray = [];
  let index = 0;
  cities.forEach((val) => {
    citiesArray.push({
      id: index,
      name: val,
    });
    index += 1;
  });

  return citiesArray;
})();

const Search = ({ setCity }) => {
  const handleOnSelect = (object) => {
    setCity(object.name);
  };

  return (
    <div className="search-bar">
      <ReactSearchAutocomplete
        items={[...city]}
        onSelect={handleOnSelect}
        placeholder="Enter your location"
        styling={{
          height: '44px',
          border: '1px solid white',
          borderRadius: '24px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
          hoverBackgroundColor: 'rgba(0,0,0,0.65)',
          color: 'white',
          fontSize: '20px',
          fontFamily: 'Roboto',
          iconColor: 'white',
          lineColor: 'grey',
          placeholderColor: 'white  ',
          clearIconMargin: '3px 8px 0 0',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Search;
