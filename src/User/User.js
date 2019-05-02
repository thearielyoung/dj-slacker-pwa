import React from 'react';

function User(props) {
  return (
    <div className="user-info">
    ${props.user_id}: ${props.spotify_id}
  </div>
  );
}

export default User;
// id
// spotify_id
// auth_token
// refresh_token
