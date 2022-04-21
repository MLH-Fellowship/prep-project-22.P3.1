import {
  WiDaySunny,
  WiRain,
  WiFog,
  WiCloudy,
  WiSnowflakeCold,
  WiThunderstorm,
} from 'react-icons/wi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import clearBack from '../../assets/images/Clear.webp';
import rainBack from '../../assets/images/Rain.jpg';
import hazeBack from '../../assets/images/Fog.jpg';
import cloudBack from '../../assets/images/Cloud.jpeg';
import snowBack from '../../assets/images/Snow.jpg';
import thunderBack from '../../assets/images/ThunderStorm.jpg';

const backgrounds = {
  Clear: [
    clearBack,
    <WiDaySunny key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; The weather looks clear. A great day to go out!
    </p>,
  ],
  Rain: [
    rainBack,
    <WiRain key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; It is raining outside. Please take an umbrella!
    </p>,
  ],
  Drizzle: [
    rainBack,
    <WiRain key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; It is drizziling, take a jacket or even umbrella.
    </p>,
  ],
  Haze: [
    hazeBack,
    <WiFog key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; It is foggy,visbility might be reduced be carefull while
      driving
    </p>,
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
    <p key="">
      <BsFillInfoCircleFill key="" /> Caution! there is a tornado, seek cover
    </p>,
  ],
  Clouds: [cloudBack, <WiCloudy key="" />, ''],
  Snow: [
    snowBack,
    <WiSnowflakeCold key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; It is snowing, make sure to take warm clothes and be careful
      with ice on the roads
    </p>,
  ],
  Thunderstorm: [
    thunderBack,
    <WiThunderstorm key="" />,
    <p key="">
      <BsFillInfoCircleFill key="" />
      &nbsp;&nbsp; It is thundering outside, please avoid going out
    </p>,
  ],
};
export default backgrounds;
