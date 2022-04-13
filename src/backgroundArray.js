import { WiDaySunny } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";

import clearBack from './Clear.jpg';
import rainBack  from './Rainy.jpeg';
import hazeBack  from './Haze.jpeg';
import cloudBack from './Cloud.jpg'

const backgrounds = {Clear: [clearBack, <WiDaySunny/>], Rain: [rainBack, <WiRain/>], Haze:[hazeBack,<WiFog/>], Clouds: [cloudBack, <WiCloudy/>]};
export default backgrounds;