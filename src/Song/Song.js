import React from 'react';

function Song(props) {
  return (
    <li className="song-info">
    {props.song.user}: {props.song.track.item.name} -- {props.song.track.item.artists[0].name}
  </li>
  );
}

export default Song;
// id
// spotify_id
// auth_token
// refresh_token
