import React, { Component } from 'react';
    import './User.css'

class User extends Component {
  constructor() {
    super()
    this.state = {
      user_id: '',
      spotify_id: ''
    };
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
