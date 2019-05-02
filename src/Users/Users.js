import React, { Component } from 'react';
import User from '../User/user';
import './Users.css'

class Users extends Component {
  constructor() {
    super()
    this.state = {
      'users': []
    }; 
  }

  componentWillMount() {
      fetch("https://dj-slacker.herokuapp.com/user", {
        mode: 'cors'
      })
      .then(results => {
        alert(JSON.stringify(results));
        return results.json();
      } ) 
      .then(users => {
        alert(JSON.stringify(users));
        this.setState({'users': users});
      })
      .catch(error => alert("An error happened " + error));
  }

  render() {
    return (
      <div id="test">
        {this.state.users.map((item, index) => (
          <User user_id={item.id} spotify_id={item.spotify_id} />
        ))}
    </div>
    )
  }
}

export default Users;

// id
// spotify_id
// auth_token
// refresh_token
