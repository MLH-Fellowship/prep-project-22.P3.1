/* eslint-disable */
import { useState, useEffect } from "react";
import "./MusicRecommender.css"

import SpotifyComponent from "./SpotifyComponent";

const MusicRecommender = ({ props }) => {
  const [playlistId, setPlaylistId] = useState("7LqjQuTFvBj2TFq5kq9mCp");
  const [userPreference, setUserPreferences] = useState(null);
  // Stop music when new audio item is clicked - SpotifyComponent
  // Select the playlist based on the preference and the weather
  // Apple music API & embed
  // Login with spotify & Apple music

  // Update the preference and playlistId
  useEffect(() => setPlaylistId("78ENPoHD87U9kXWc9VWnJU"), [playlistId])


  useEffect(() => setUserPreferences(localStorage.getItem('preference')), [userPreference]);

  const handlePreference = preference => {
    if (preference != null) {
      localStorage.setItem('preference', preference);
      setUserPreferences(preference);
    }
  }

  return (
    <>
      <div className="container">

        <br /><h3>Your Music Forecast!!</h3>

        {userPreference == null ?
          <>
            <br />
            <b><i>
              <h4>Looking to get your <span className="goldenWords">Music Forecast</span> ?</h4>
              <h5>Select your favorite genre!</h5>
            </i></b>
            <div className="row justify-content-center">
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Pop</h5>
                  <button type="button" className="btn btn-block btn-light"
                    onClick={() => handlePreference("pop")}>
                    Confirm
                  </button>
                </div>
              </div>
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Hip Hop and Rap</h5>
                  <button type="button" className="btn btn-block btn-light"
                    onClick={() => handlePreference("rap")}>
                    Confirm
                  </button>
                </div>
              </div>
              <div className="card text-center bg-dark w-50 col-md">
                <div className="card-body">
                  <h5 className="card-title">Electric Beats and House</h5>
                  <button type="button" className="btn btn-block btn-light"
                    onClick={() => handlePreference("house")}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <SpotifyComponent props={props} playlistId={playlistId} />
          </>
        }

      </div>
    </>
  )
};

export default MusicRecommender;