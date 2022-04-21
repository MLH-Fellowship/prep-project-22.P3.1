import react, {useState, useEffect} from 'react'
import './weatherCard.css';
import { WiBarometer, WiWindy, WiHumidity } from 'react-icons/wi';
import backgrounds from './backgroundArray';
import SoundArray from '../backgroundSoundArray/SoundArray'
import morningBird from '../backgroundSoundArray/assets/raindrop.mp3'

function WeatherCard(props) {

  const [hover, setHover] = useState(false)
  const { results } = props;
  const [data, setData] = useState([]);
  const { cardBackground } = props;
  console.log(cardBackground);
  
  let emoji = null;
  if (typeof data.main !== "undefined") {
    if (data.weather[0].main === "Clouds") {
      emoji = "fa-cloud"

    }else if (data.weather[0].main === "Thunderstrom"){
      emoji = "fa-bolt"
    }else if (data.weather[0].main === "Drizzle"){
      emoji = "fa-cloud-rain"
    }else if (data.weather[0].main === "Rain"){
      emoji = "fa-cloud-shower-heavy"
    }else if (data.weather[0].main === "Snow"){
        emoji = "fa-snow-flake"
  }else {
    emoji = "fa-smog"
  
 }
 }

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
      {/* <i className={`fas ${emoji} fa-4x`}></i> */}
      
      <div className="content">
        <div className="place">
          {results.name}, {results.sys.country}
          
        </div>
       
        <div className="top-info">
          <div className="temp">{results.main.temp}°</div>
          <div className="conditions">
            <div className="forecast">
              {results.weather[0].main} <button style={{cursor:"pointer"}} className="playButton" type="button" onClick={playAudio}>{backgrounds[cardBackground][1]}</button>
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
        <div className="recomendation">{backgrounds[cardBackground][2]}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
