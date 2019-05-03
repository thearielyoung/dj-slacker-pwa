import React, { Component } from "react";
import User from "../User/User";
import "./Users.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  componentDidMount() {
    setInterval(() => {
      this.getUsers();
    }, 10000);
  }

  getUsers() {
    fetch("https://dj-slacker.herokuapp.com/user", {
      mode: "cors"
    })
      .then(results => {
        return results.json();
      })
      .then(users => {
        this.setState({ users: users });
      })
      .catch(error => alert("An error happened " + error));
  }

  render() {
    return (
      <div>
        <h2>Contributing Users</h2>
        <ul>
          {this.state.users.map((item, index) => (
            <User user_id={item.id} spotify_id={item.spotify_id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;

// id
// spotify_id
// auth_token
// refresh_token
