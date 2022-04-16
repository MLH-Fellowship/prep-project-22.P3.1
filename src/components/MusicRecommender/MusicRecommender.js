/* eslint-disable */
import "./MusicRecommender.css"

import SpotifyComponent from "./SpotifyComponent";

const MusicRecommender = ({ props }) => { 
  // Stop music when new audio item is clicked - SpotifyComponent
  // Workflow for choosing genre - Using localstorage
  // Apple music API & embed
  // Login with spotify & Apple music

  return (
    <>
      <div className="container">

        <br /><h3>Your Weather Broadcast</h3>

        <SpotifyComponent props={props} />

      </div>
    </>
  )
};

export default MusicRecommender;