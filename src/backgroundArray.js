import { WiDaySunny , WiRain , WiFog , WiCloudy } from "react-icons/wi";

import clearBack from './Clear.webp';
import rainBack  from './Rain.webp';
import hazeBack  from './Fog.jpg';
import cloudBack from './Cloud.jpeg'

const backgrounds = {Clear: [clearBack, <WiDaySunny/>], 
    Rain: [rainBack, <WiRain/>], 
    Haze:[hazeBack,<WiFog/>], 
    Clouds: [cloudBack, <WiCloudy/>]};
export default backgrounds;