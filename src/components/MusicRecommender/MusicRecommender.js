/* eslint-disable */
import { useState, useEffect } from "react";
import "./MusicRecommender.css"

const MusicRecommender = ({ props }) => {
  const [accessToken, setAccessToken] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [playlistData, setPlaylistData] = useState([]);

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
      }).then((response) => response.json()).then((result) => {
        setPlaylistId("7LqjQuTFvBj2TFq5kq9mCp");
        setAccessToken(result.access_token);
        fetchPlaylistsData();
      }).catch((err) => console.error(err));
    };
    _getAccessToken();
  }, [props]);

  // Call the endpoint to fetch song data from specified playlist
  const fetchPlaylistsData = async () => {
    // GET Playlist - https://developer.spotify.com/console/get-playlist/
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=6`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
    }).then((response) => response.json()).then((result) => {
      let items = result.items;
      console.log(items);
      // Iterate over the resulting data and set the songs data
      setPlaylistData(items.map(({ track }) => ({
        name: track.name,
        artists: track.artists,
        imageUrl: track.album.images[0].url,
        previewUrl: track.preview_url,
        spotifyUrl: track.external_urls.spotify,
      })));
    }).catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          {playlistData && playlistData.map((track) => (
            <div className="col-sm">

              <div className="card song_card">
                <a href={track.spotifyUrl} target="_blank" rel="noreferrer noopener" className="float-right" title="View Song on Spotify">
                  <img src={track.imageUrl} className="card-img-top song_image" alt="Song cover photo" />
                </a>
                <div className="card-body">
                  
                  <audio id="audio_control">
                    <source src={track.previewUrl} type="audio/mpeg" />
                  </audio>
                  <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Preview song"></i>
                  

                  <h5 className="card-title">{track.name}</h5>
                  <p className="card-text text-left">
                    {track.artists.map((artist, index) => (
                      <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer noopener" title="View Artist on Spotify">{index ? ',' : ''} {artist.name}</a>
                    ))}
                  </p>
                </div>
              </div>

            </div>
          ))}
          <br />
        </div>
      </div>
    </>
  )
};

export default MusicRecommender;