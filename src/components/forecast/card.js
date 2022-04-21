import './forecast.css';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

function timeConverterTime(unixTimestamp) {
  const a = new Date(unixTimestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  return `${hour}:${min}`;
}

function timeConverterDate(unixTimestamp) {
  const a = new Date(unixTimestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[a.getMonth()];
  const date = a.getDate();
  return `${month} ${date}`;
}

export default function WeatherCard({ value, data }) {
  // console.log('this is data: ', data);
  // console.log('this is value: ', value);
  const todayDate = timeConverterDate(data.dt);
  const todayTime = timeConverterTime(data.dt);
  return (
    <>
      {value === 'Daily' && (
        <>
          <div className="container-forecast">
            <div className="info">
              <div className="time">
                <p className="day">
                  <b className="bold">Day:</b> {todayDate}
                </p>
              </div>
              <br />
              <div className="temps">
                <div className="low">
                  <FaTemperatureLow className="wi" />
                  &nbsp; <b>Low</b> {data.temp.min}°C
                </div>
                <div className="high">
                  <FaTemperatureHigh className="wi" />
                  &nbsp; <b>High</b> {data.temp.max}°C
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {value === 'Hourly' && (
        <>
          <div className="container-forecast">
            <div>
              <div className="time">
                <span className="day">
                  {todayDate} | {todayTime}
                </span>
              </div>
              <br />
              <div className="temps">
                <div className="low">
                  <b>Humidity</b> {data.humidity}%
                </div>
                <div className="high">
                  <b>Temp</b> {data.temp}°C
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
