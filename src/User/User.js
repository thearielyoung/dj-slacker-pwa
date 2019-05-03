import React from 'react';

function User(props) {
  return (
    <li className="user-info">
    {props.user_id}: {props.spotify_id}
  </li>
  );
}

export default User;
// id
// spotify_id
// auth_token
// refresh_token
