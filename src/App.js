import React, { Component } from "react";
import Users from "./Users/Users";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Songs from "./Songs/Songs";
import "./App.css";

const styles = {
  root: {
    maxWidth: "1000px",
    margin: "auto"
  },
  heading: {
    textAlign: "center",
    marginTop: "48px"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.root}>
        <h1 style={styles.heading}>DJ Slacker - PWA</h1>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Users />
          </Grid>
          <Grid item xs={8}>
            <Songs />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
