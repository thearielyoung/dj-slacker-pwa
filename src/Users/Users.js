import React, { Component } from 'react';
import User from '../User/user';
import './Users.css'

class Users extends Component {
  constructor() {
    super()

  }

  componentWillMount() {
    fetch("https://dj-slacker.herokuapp.com/user ").
      .then(results => return results.json())
      .then(users => {
          
      })
      .error(error => alert("An error happened " + error));

  }

  render() {
    return (
      <div className="user-info">
        ${this.state.user_id}: ${this.state.spotify_id}
      </div>
    )
  }
}

export default User;

// id
// spotify_id
// auth_token
// refresh_token
