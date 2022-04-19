import './forecast.css';

export default function WeatherCard(
  { value },
  {
    day = 'Today',
    date = 'Apr 19',
    iconClass = 'wi-day-sunny',
    low = '12',
    high = '33',
  }
) {
  return (
    <>
      {value === '7 Days' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">{day}</span>
              <span className="date">{date}</span>
            </div>
            <i className={`wi  ${iconClass}`} />
            <div className="low">
              <span>
                High <b>{high}°</b>
              </span>
            </div>
            <div className="high">
              <span>
                Low <b>{low}°</b>
              </span>
            </div>
          </div>
        </>
      )}
      {value === '7 Hours' && (
        <>
          <div className="container">
            <div className="time">
              <span className="day">{day}</span>
              <span className="date">{date}</span>
            </div>
            <i className={`wi  ${iconClass}`} />
            <div className="low">
              <span className="humidity-info">
                Humidity <b>{high}°</b>
              </span>
            </div>
            <div className="high">
              <span>
                Low <b>{low}°</b>
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
