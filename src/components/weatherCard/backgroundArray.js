import {
  WiDaySunny,
  WiRain,
  WiFog,
  WiCloudy,
  WiSnowflakeCold,
  WiThunderstorm,
} from 'react-icons/wi';

import clearBack from '../../assets/images/Clear.webp';
import rainBack from '../../assets/images/Rain.webp';
import hazeBack from '../../assets/images/Fog.jpg';
import cloudBack from '../../assets/images/Cloud.jpeg';
import snowBack from '../../assets/images/Snow.webp';
import thunderBack from '../../assets/images/ThunderStorm.webp';

const backgrounds = {
  Clear: [
    clearBack,
    <WiDaySunny key="" />,
    'The weather looks clear. A great day to go out!',
  ],
  Rain: [
    rainBack,
    <WiRain key="" />,
    "It's raining outside. Please take an umberlla!",
  ],
  Drizzle: [
    rainBack,
    <WiRain key="" />,
    'It is drizziling, take a jacket or even umbrella',
  ],
  Haze: [
    hazeBack,
    <WiFog key="" />,
    'It is foggy,visbility might be reduced be carefull while driving',
  ],
  Mist: [hazeBack, <WiFog key="" />, ''],
  Smoke: [hazeBack, <WiFog key="" />, ''],
  Dust: [hazeBack, <WiFog key="" />, ''],
  Sand: [hazeBack, <WiFog key="" />, ''],
  Fog: [hazeBack, <WiFog key="" />, ''],
  Ash: [hazeBack, <WiFog key="" />, ''],
  Squall: [hazeBack, <WiFog key="" />, ''],
  Tornado: [
    hazeBack,
    <WiFog key="" />,
    'Caution! there is a tornado, seek cover',
  ],
  Clouds: [cloudBack, <WiCloudy key="" />, 'It is overcast outside'],
  Snow: [
    snowBack,
    <WiSnowflakeCold key="" />,
    'It is snowing, make sure to take warm clothes and be carefull with ice on the roads',
  ],
  Thunderstorm: [
    thunderBack,
    <WiThunderstorm key="" />,
    'It is thundering outside, please avoid going out',
  ],
};
export default backgrounds;
