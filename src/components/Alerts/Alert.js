import { ScheduleSend } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './Alert.css';

function Alert({ city, isLoaded, cityCoordinates }) {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (isLoaded && cityCoordinates) {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&exclude=&appid=${process.env.REACT_APP_APIKEY}`;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          if (result.alerts) {
            const title = result.alerts[0]?.event;
            let description = result.alerts[0]?.description;
            let sender = result.alerts[0]?.sender_name;
            if (
              description.includes('WHAT') &&
              description.includes('WHERE') &&
              description.includes('WHEN')
            ) {
              description = description.trim();
              const sentences = description.split('*');
              sentences.forEach((word, index) => {
                const start = word.indexOf('...') + 3;
                let newWord = word.slice(start);
                newWord = newWord.trim();
                newWord = newWord.replaceAll('\n', ' ');
                newWord = newWord.replaceAll('...', '');
                if (newWord.slice(-1) !== '.') {
                  newWord += '.';
                }
                sentences[index] = newWord;
              });
              description = sentences.join(' ');
            } else {
              description = description.trim();
              let sentences = description.split(' ');
              sentences.forEach((word, index) => {
                const newWord = word.trim();
                sentences[index] = newWord;
              });
              sentences = sentences.filter((word) => word);
              description = sentences.join(' ');
            }
            if(!sender) {
              sender = `(Source: Unavailable)`
            } else {
              sender = `(Source: ${sender})`
            }
            if(!description) {
              description = 'Description is Unavailable.'
            }
            description += ` ${sender}` 
            setAlert({ title: title, description: description });
          } else {
            setAlert(null);
          }
        });
    }
  }, [city, isLoaded, cityCoordinates]);

  return (
    <div id="alert" className="alertsClass">
      {isLoaded && alert !== null && alert !== undefined && (
        <div
          className="alertsAvailable"
          role="button"
          tabIndex={0}
          onClick={() => {
            document
              .querySelector('.descriptionAlert')
              .classList.toggle('show');
          }}
          onKeyDown={() => {
            document
              .querySelector('.descriptionAlert')
              .classList.toggle('show');
          }}
        >
          {alert.title !== undefined && alert.title !== null && (
            <div className="title">
              <span className="titleText">
                <em>Alerts in this region are - </em>
                {alert.title}
              </span>
              <button type="button" className="dropDown">
                v
              </button>
            </div>
          )}
          {alert.description !== undefined && alert.description !== null && (
            <div className="descriptionAlert">
              <p>{alert.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Alert;
