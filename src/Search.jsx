import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import cities from './cities';
import './App.css';

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
    <div
      style={{
        width: '200px',
        margin: 'auto',
      }}
    >
      <ReactSearchAutocomplete
        items={[...city]}
        onSelect={handleOnSelect}
        placeholder="Enter your location"
        styling={{
          height: '34px',
          border: '1px solid blue',
          borderRadius: '4px',
          backgroundColor: 'white',
          boxShadow: 'none',
          hoverBackgroundColor: 'lightblue',
          color: 'blue',
          fontSize: '12px',
          fontFamily: 'Ariel',
          iconColor: 'darkblue',
          lineColor: 'lightgreen',
          placeholderColor: 'grey',
          clearIconMargin: '3px 8px 0 0',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Search;
