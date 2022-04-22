import { useState, useEffect } from 'react';
import './MusicRecommender.css';

import SpotifyComponent from './SpotifyComponent';
import SongChoices from './SongChoices';

const MusicRecommender = ({ props }) => {
  const [playlistId, setPlaylistId] = useState(null);
  const [userPreference, setUserPreferences] = useState(null);

  // Select the playlist based on weather codition and preference
  useEffect(() => {
    try {
      if (userPreference)
        // eslint-disable-next-line no-unused-expressions
        setPlaylistId(SongChoices[props.weather[0].main][userPreference]);
    } catch (err) {
      console.error(err);
    }
  }, [userPreference, props, playlistId]);

  // Get the preference saved from localstorage and update the userPreference variable
  useEffect(
    () => setUserPreferences(localStorage.getItem('preference')),
    [userPreference]
  );

  // Function to save preference to localstorage
  const handlePreference = (preference) => {
    if (preference != null) {
      localStorage.setItem('preference', preference);
      setUserPreferences(preference);
    }
  };

  return (
    <>
      <div className="container" id="songs">
        <br />
        <h3>Your Music Forecast!!</h3>

        {userPreference == null ? (
          // Render the UI to select a preference if the preference has not been set
          <>
            <br />
            <b>
              <i>
                <h4>
                  Looking to get your{' '}
                  <span className="golden_words">Music Forecast</span> ?
                </h4>
                <h5>Select your favorite genre!</h5>
              </i>
            </b>
            <div className="row justify-content-center">
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Pop</h5>
                  <button
                    type="button"
                    className="btn btn-block btn-light"
                    onClick={() => handlePreference('pop')}
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Hip Hop and Rap</h5>
                  <button
                    type="button"
                    className="btn btn-block btn-light"
                    onClick={() => handlePreference('rap')}
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Electric Beats and House</h5>
                  <button
                    type="button"
                    className="btn btn-block btn-light"
                    onClick={() => handlePreference('house')}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
          </>
        ) : (
          // Render the Spotify component if the user preference is set!
          <>
            <SpotifyComponent props={props} playlistId={playlistId} />
          </>
        )}
      </div>
    </>
  );
};

export default MusicRecommender;
