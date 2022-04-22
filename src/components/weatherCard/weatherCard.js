import './weatherCard.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import { useState } from 'react';
import Speak from '../../assets/images/tellWeather.png';
import backgrounds from './backgroundArray';

function WeatherCard(props) {
  const { speak } = useSpeechSynthesis();
  const { results } = props;
  const { cardBackground } = props;
  const [units, setUnits] = useState('metric');
  const [tempUnit, setTempUnit] = useState('fahrenheit');

  const handleChange = () => {
    if (tempUnit === 'celsius') {
      setTempUnit('fahrenheit');
      setUnits('metric');
    } else {
      setTempUnit('celsius');
      setUnits('imperial');
    }
    const { onUnitsChanged } = props;
    onUnitsChanged(units);
  };

  return (
    <div className="weather-card" id="tell-weather">
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
              Feels like {results.main.feels_like}°
            </div>
          </div>
        </div>
        <div className="coordinates">
          Lon: {results.coord.lon}° Lat: {results.coord.lat} °
        </div>
        <div className="description">
          &#40; Condtions in {results.name}: {results.weather[0].description},
          with <br /> temperature ranging from {results.main.temp_min}
          &nbsp;to {results.main.temp_max} ° &#41;
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
        <div className="toggleContainer">
          <label className="toggle" htmlFor="togglebtn">
            <input type="checkbox" id="togglebtn" onChange={handleChange} />

            <span className="slider" />
            <span className="labels" data-on="° C" data-off="° F" checked />
          </label>
          <button
            type="button"
            className="tellWeather"
            onClick={() => {
              speak({
                text: `Its ${results.weather[0].main} and feels like ${results.main.feels_like} in ${results.name}`,
              });
            }}
          >
            <img src={Speak} alt="speak" className="speakIcon" />
          </button>
          <span className="speakText">
            Press Sound Icon to listen to Weather Forecast
          </span>
        </div>
        <div className="recomendation">{backgrounds[cardBackground][2]}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
