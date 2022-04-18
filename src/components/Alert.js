import { useEffect, useState } from 'react';
import './Alert.css';

function Alert({ city, isLoaded, cityCoordinates }) {
 
    const [alert, setAlert] = useState(null)

    useEffect(() => {
        if(isLoaded && cityCoordinates) {
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&exclude=&appid=${process.env.REACT_APP_APIKEY}`
            fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    if(result.alerts) {
                        const title = result.alerts[0]?.event
                        let description = result.alerts[0]?.description
                        if(description.includes('WHAT') && description.includes('WHERE') && description.includes('WHEN')) {
                            description = description.trim()
                            const sentences = description.split('*')
                            sentences.forEach((word, index) => {
                                const start = word.indexOf('...') + 3
                                let newWord = word.slice(start)
                                newWord = newWord.trim()
                                newWord = newWord.replaceAll('\n', ' ')
                                newWord = newWord.replaceAll('...', '')
                                if(newWord.slice(-1) !== '.') {
                                    newWord += '.'
                                } 
                                sentences[index] = newWord
                            });
                            description = sentences.join(' ')
                        } else {
                            description = description.trim()
                            let sentences = description.split(' ')
                            sentences.forEach((word, index) => {
                                const newWord = word.trim()
                                sentences[index] = newWord
                            })
                            sentences = sentences.filter(word => word)
                        }
                        setAlert({title: title, description: description})   
                    } else {
                        setAlert(null)
                    }
                }
            )
        }

       
    }, [city, isLoaded, cityCoordinates]);

  return (
      <div className="container">
      <ul className="nav nav-tabs">
      <li className="active"><a data-toggle="tab" href="#alert">Disaster Alerts</a></li>
      <li><a data-toggle="tab" href="#news">News</a></li>
      <div className="tab-content">
       <div id="alert" className="tab-pane fade in active">
        {isLoaded && alert !== null && alert !== undefined && (
            <>
                {alert.title !== undefined && alert.title !== null && (
                    <div className='title'>
                        <p>
                            {alert.title}
                        </p>
                    </div>
                )}
                {alert.description!== undefined && alert.description !== null && (
                    <div className='description'>
                        <p>
                            {alert.description}
                        </p>
                    </div>
                )}
            </>
        )}
        {isLoaded && !alert && (
            <>
                <p>
                    No Weather Alerts Available
                </p>
            </>
        )}
        </div>
        <div id="news" className="tab-pane fade">
            <p>No News Available</p>
        </div>
        </div>
       </ul>
      </div>
  );  
}

export default Alert;
