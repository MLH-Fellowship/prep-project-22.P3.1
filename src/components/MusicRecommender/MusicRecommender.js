/* eslint-disable */
import { useState, useEffect } from "react";

const MusicRecommender = ({ props }) => {
  const [accessToken, setAccessToken] = useState('');
  // GET Playlist - https://developer.spotify.com/console/get-playlist/
  const SPOTIFY_PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/playlists/";

  useEffect(() => {
    // Using Spotify Access url to get an access token
    // Access token is used in calling playlist endpoint
    const _getAccessToken = async () => {
      await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // Encoding the Authorization headers
          'Authorization': 'Basic ' + Buffer.from(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET, 'utf8').toString('base64')
        },
        body: 'grant_type=client_credentials',
      }).then((result) => result.json()).then((data) => {
        setAccessToken(data.access_token);
      }).catch((err) => console.error(err))
    };
    _getAccessToken();
  }, [props]);

  return (
    <br />
  )
};

export default MusicRecommender;