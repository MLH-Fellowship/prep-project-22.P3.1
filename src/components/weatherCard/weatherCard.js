import './weatherCard.css';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import { useState } from 'react';
import backgrounds from './backgroundArray';

function WeatherCard(props) {
  const { results } = props;
  const { cardBackground } = props;
  const [units, setUnits] = useState('metric');
  const [tempUnit, setTempUnit] = useState('fahrenheit');
  console.log(cardBackground);

  const handleChange = (e) => {
    e.preventDefault();
    if (tempUnit === 'celsius') {
      setTempUnit('fahrenheit');
      setUnits('metric');
    }
    else {
      setTempUnit('celsius')
      setUnits('imperial');
    }
    const { onUnitsChanged } = props
    onUnitsChanged(units);
  }
  
  return (
    <div className="weather-card">
      <div className="content">
        <div className="place">
          {results.name}, {results.sys.country}
        </div>
        <div className="top-info">
          <div className="temp">{results.main.temp}°</div>
          <div className="conditions">
            <div className="forecast">
              {results.weather[0].main} {backgrounds[cardBackground][1]}
            </div>
            <div className="temp-feel">
              Feels like {results.main.feels_like}°C
            </div>
          </div>
        </div>
        <div className="coordinates">
          Lon: {results.coord.lon}° Lat: {results.coord.lat} °
        </div>
        <div className="description">
          &#40; Condtions in {results.name}: {results.weather[0].description},
          with <br /> temperature ranging from {results.main.temp_min}
          &nbsp;to {results.main.temp_max} °C &#41;
        </div>
        <div className="bottom-info">
          <p>
            <WiBarometer className="we-icon" />
            <br /> Presurre: {results.main.pressure} hPa
          </p>
          <p>
            <WiHumidity className="we-icon" />
            <br /> Humidty: {results.main.humidity}%
          </p>
          <p>
            <WiWindy className="we-icon" />
            <br /> Wind Speed: {results.wind.speed} m/s
          </p>
        </div>
        <div>
          <button type="button" value={tempUnit} onClick={handleChange}>
            click here
          </button>
          to change the temprature unit 
        </div>
        <div className="recomendation">{backgrounds[cardBackground][2]}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
