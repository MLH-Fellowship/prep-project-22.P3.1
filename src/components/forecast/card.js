import './forecast.css';

export default function WeatherCard({ value, data }) {
  // console.log('this is data: ', data);
  // console.log('this is value: ', value);
  return (
    <>
      {value === '7 Days' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">Today</span>
              <span className="date">Apr 19</span>
            </div>
            <i className="wi wi-day-sunny" />
            <div className="low">
              <span>
                High <b>{data.temp.max}°C</b>
              </span>
            </div>
            <div className="high">
              <span>
                Low <b>{data.temp.min}°C</b>
              </span>
            </div>
          </div>
        </>
      )}
      {value === '7 Hours' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">Today</span>
              <span className="date">Apr 19</span>
            </div>
            <i className="wi wi-day-sunny" />
            <div className="low">
              <span className="humidity-info">
                Humidity <b>{data.humidity}%</b>
              </span>
            </div>
            <div className="high">
              <span className="humidity-info">
                Temp <b>{data.temp}°C</b>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
