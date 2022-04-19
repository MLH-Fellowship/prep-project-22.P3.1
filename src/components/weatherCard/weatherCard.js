import './weatherCard.css';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import backgrounds from './backgroundArray';
import SoundArray from '../backgroundSoundArray/SoundArray'
import morningBird from '../backgroundSoundArray/assets/raindrop.mp3'

function WeatherCard(props) {
  const { results } = props;
  const { cardBackground } = props;
  console.log(cardBackground);
  

  const arr = {
    Clear: SoundArray.morning,
    Rain:SoundArray.Rain ,
    Drizzle: SoundArray.sunrise ,
    Haze:SoundArray.sunrise,
    Mist:SoundArray.wind,
    Smoke:SoundArray.wind,
    Dust:SoundArray.wind,
    Sand:SoundArray.wind,
    Fog:SoundArray.wind,
    Ash:SoundArray.Rain,
    Squall:SoundArray.Rain,
    Tornado:SoundArray.thunder,
    Clouds: SoundArray.thunder,
    Snow: SoundArray.wind,
    Thunderstorm: SoundArray.thunder,
    }
  
    const playAudio = () => {
      const aud = new Audio(arr[`${cardBackground}`]);
  
      console.log(`arr[${cardBackground}]`)
      aud.play();
    
      setTimeout(() => {
        aud.pause()
      }, 10000);
    }

    
  return (
    <div className="weather-card">
      <button className="playButton" type="button" onClick={playAudio}>Play Audio </button>
      <div className="content">
        <div className="place">
          {results.name}, {results.sys.country}
        </div>
        <div className="top-info">
          <div className="temp">{results.main.temp}°</div>
          <div className="conditions">
            <div className="forecast">
              {cardBackground === 'Clear' && (
                  <span>The weather looks clear, you can go out!  </span>
              )}
              {cardBackground === 'Clouds' && (
                <span>The weather looks cloudy, rain might happen!  </span>
              )}
              {cardBackground === 'Rain' && (
              <span>Please take an umberlla!  </span>
              )}
              {cardBackground === 'Snow' && (
                <span>The weather looks awesome</span>
              )}
              {cardBackground === 'Thunderstorm' && (
                <span>Stay inside</span>
              )}
              {cardBackground === 'Mist' && (
                <span>The weather looks misty</span>
              )}
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
      </div>
    </div>
  );
}

export default WeatherCard;