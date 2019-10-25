import React from "react";
const style = {
  marginBottom: "10px",
  letterSpacing: "0.025em"
};
function User(props) {
  return (
    <li className="user-info" style={style}>
      {props.name}
    </li>
  );
}

export default User;
// id
// spotify_id
// auth_token
// refresh_token
