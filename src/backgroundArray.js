import {
  WiDaySunny,
  WiRain,
  WiFog,
  WiCloudy,
  WiSnowflakeCold,
  WiThunderstorm,
} from 'react-icons/wi';

import clearBack from './Clear.webp';
import rainBack from './Rain.webp';
import hazeBack from './Fog.jpg';
import cloudBack from './Cloud.jpeg';
import snowBack from './Snow.webp';
import thunderBack from './ThunderStorm.webp';

const backgrounds = {
  Clear: [clearBack, <WiDaySunny key="" />],
  Rain: [rainBack, <WiRain key="" />],
  Drizzle: [rainBack, <WiRain key="" />],
  Haze: [hazeBack, <WiFog key="" />],
  Mist: [hazeBack, <WiFog key="" />],
  Smoke: [hazeBack, <WiFog key="" />],
  Dust: [hazeBack, <WiFog key="" />],
  Sand: [hazeBack, <WiFog key="" />],
  Fog: [hazeBack, <WiFog key="" />],
  Ash: [hazeBack, <WiFog key="" />],
  Squall: [hazeBack, <WiFog key="" />],
  Tornado: [hazeBack, <WiFog key="" />],
  Clouds: [cloudBack, <WiCloudy key="" />],
  Snow: [snowBack, <WiSnowflakeCold key="" />],
  Thunderstorm: [thunderBack, <WiThunderstorm key="" />],
};
export default backgrounds;