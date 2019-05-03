import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Song from "../Song/Song";
import "./Songs.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 960,
    margin: 'auto'
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class Songs extends Component {
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
    fetch("https://dj-slacker.herokuapp.com/nowplaying", {
      mode: "cors"
    })
      .then(results => {
        return results.json();
      })
      .then(songs => {
        this.setState({ songs: songs });
      })
      .catch(error => alert("An error happened " + error));
  }
  renderSongs = () => {
    return this.state.songs.map((item, index) => (
      <Grid item xs={16}>
        <Song song={item} />
      </Grid>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        {this.state.songs && this.state.songs.length > 0 ? (
          this.renderSongs()
        ) : (
          <Grid item xs={12}>
            It's too quiet in here... start some music
          </Grid>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(Songs);

// id
// spotify_id
// auth_token
// refresh_token
