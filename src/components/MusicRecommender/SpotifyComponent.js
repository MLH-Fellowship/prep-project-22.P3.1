/* eslint-disable */
import { useState, useEffect } from "react";

import AudioPlayer from "./AudioPlayer";

const SpotifyComponent = ({ props }) => {
  const [accessToken, setAccessToken] = useState('');
  const [playlistId, setPlaylistId] = useState('');
  const [playlistData, setPlaylistData] = useState([]);
  // To store & set layout choice
  const [listLayout, setListLayout] = useState(false)

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
      // Iterate over the resulting data and set the playlist data
      setPlaylistData(items.map(({ track }) => ({
        id: track.id,
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
      <div className="layout_toggle text-right">
        <i className={listLayout ? "icon_inactive fa fa-th-large" : 'icon_active fa fa-th-large'} aria-hidden="true"
          onClick={() => setListLayout(false)}>
        </i>
        <i className={listLayout ? 'icon_active fa fa-list' : "icon_inactive fa fa-list"} aria-hidden="true"
          onClick={() => setListLayout(true)}>
        </i>
      </div>

      {listLayout &&
        <div className="container">
          <iframe className="embedded_spotify_playlist"
            src={"https://open.spotify.com/embed/playlist/" + playlistId + "?utm_source=generator"}
            width="100%" height="500" frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
          </iframe>
        </div>
      }

      {!listLayout &&
        <div className="row">
          <br />
          {playlistData && playlistData.map((track) => (
            <>
              <div className="col-sm">

                <div className="card">
                  <div className="row no-gutters text-left">
                    <div className="col-sm-5">
                      <a href={track.spotifyUrl} target="_blank" rel="noreferrer noopener" className="card-img" title="View Song on Spotify">
                        <img src={track.imageUrl} className="card-img-top song_image" alt="Song cover photo" />
                      </a>
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">

                        <h5 className="card-title">{track.name}</h5>
                        <p className="card-text">
                          {track.artists.map((artist, index) => (
                            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer noopener" title="View Artist on Spotify">{index ? ',' : ''} {artist.name}</a>
                          ))}
                        </p>

                        <AudioPlayer track={track} />

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          ))}
          <br />
        </div>
      }
    </>
  )
}

export default SpotifyComponent;