import React, { Component } from "react";
import Users from "./Users/Users";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Songs from "./Songs/Songs";
import "./App.css";
import LIkedSongs from "./LIkedSongs/LIkedSongs";
import PlayedSongs from "./PlayedSongs/PlayedSongs";

const styles = {
  root: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "12px"
  },
  heading: {
    textAlign: "center",
    marginTop: "48px"
  },
  footer: {
    fontSize: "12px",
    marginTop: "48px",
    justifyContent: "center"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.root}>
        <h1 style={styles.heading}>DJ Slacker - PWA</h1>
        <Grid container spacing={12}>
          <Grid item xs={12} sm={4}>
            <Users />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Songs />
          </Grid>
          <Grid item xs={12} sm={4}>
            <LIkedSongs />
          </Grid>
          <Grid item xs={12} sm={8}>
            <PlayedSongs />
          </Grid>
        </Grid>
        <Grid container spacing={12} style={styles.footer}>
          Developed By: John. R | Ariel | Jackie | Varun | Andrew 🤘
        </Grid>
      </div>
    );
  }
}

export default App;
