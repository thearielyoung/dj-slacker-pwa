import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LikedSong from "../LikedSong/LikedSong";
import "./LikedSongs.css";

// dummy data
import DummySongs from "../../data/latest.json";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 960,
    margin: "auto"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class LikedSongs extends Component {
  constructor() {
    super();
    this.state = {
      songs: []
    };
  }

  componentWillMount() {
    this.getSongs();
  }

  componentDidMount() {
    setInterval(() => {
      this.getSongs();
    }, 60000);
  }

  getSongs() {
    // console.log(Song1);
    // const songs = [ Song1 ];
    // this.setState({ songs: DummySongs });
    // TODO: uncomment for Prod
    fetch("https://dj-slacker.herokuapp.com/mostLikedSongs", {
      mode: "cors"
    })
      .then(results => {
        return results.json();
      })
      .then(songs => {
        alert(JSON.stringify(songs));
        this.setState({ songs: songs });
      })
      .catch(error => alert("An error happened " + error));
  }
  renderSongs = () => {
    return this.state.songs.map((item, index) => (
      <Grid item xs={16}>
        <LikedSong song={item} />
      </Grid>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2>Most Liked Jams</h2>
        <Grid container className={classes.root} spacing={16}>
          {this.state.songs && this.state.songs.length > 0 ? (
            this.renderSongs()
          ) : (
            <Grid item xs={12}>
              
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LikedSongs);

// id
// spotify_id
// auth_token
// refresh_token
