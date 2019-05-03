import React, { Component } from 'react';
import Song from '../Song/song';
import './Songs.css'

class Songs extends Component {
  constructor() {
    super()
    this.state = {
      'songs': []
    };
  }

  componentWillMount() {
    this.getSongs();
  }

  componentDidMount() {
    setInterval(() => { this.getSongs() }, 60000);
  }

  getSongs() {
    fetch("https://dj-slacker.herokuapp.com/nowplaying", {
      mode: 'cors'
    })
      .then(results => {
        return results.json();
      })
      .then(songs => {
        this.setState({ 'songs': songs });
      })
      .catch(error => alert("An error happened " + error));
  }
  renderSongs = () => {
    return this.state.songs.map((item, index) => (
      <Song song={item} />
    ))
  }

  render() {
    return (
      <div id="test">
        <ul>
          {this.state.songs && this.state.songs.length > 0
            ? this.renderSongs() : <p>It's too quiet in here... start some music</p>}
          {/* { if (this.state.songs && this.state.songs.length > 0) {
            {
              this.state.songs.map((item, index) => (
                <Song song={item} />
              ))
            }
          } else {
            <p>It's too quiet in here... start some music</p>
          }} */}
        </ul>
      </div>
    )
  }
}

export default Songs;

// id
// spotify_id
// auth_token
// refresh_token
