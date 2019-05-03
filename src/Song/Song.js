import React from 'react';
import './Song.css'

function Song(props) {
  return (
    <li className="song-info">
    <span className="track">
      {props.song.user}:

      <iframe className="album-art" src={`https://open.spotify.com/embed/track/${props.song.track.item.id}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </span>
  </li>
  );
}

export default Song;
// id
// spotify_id
// auth_token
// refresh_token
