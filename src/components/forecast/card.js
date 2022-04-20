import './forecast.css';

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
      {value === '7 Days' && (
        <>
          <div className="container-forecast">
            <div className="time">
              <span className="day">Day</span>
              <span className="date">{todayDate}</span>
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
          <div className="container-forecast">
            <div className="time">
              <span className="day">{todayDate}</span>
              <span className="date">{todayTime}</span>
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
