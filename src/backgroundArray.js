import { WiDaySunny, WiRain, WiFog, WiCloudy } from 'react-icons/wi';

import clearBack from './Clear.webp';
import rainBack  from './Rain.webp';
import hazeBack  from './Fog.jpg';
import cloudBack from './Cloud.jpeg'

const backgrounds = {
  Clear: [clearBack, <WiDaySunny key="" />],
  Rain: [rainBack, <WiRain key="" />],
  Haze: [hazeBack, <WiFog key="" />],
  Clouds: [cloudBack, <WiCloudy key="" />],
};
export default backgrounds;
