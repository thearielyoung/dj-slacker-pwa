import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Song.css";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function Song(props) {
  const { classes, song: songObject } = props;
  const { user, track } = songObject;
  return (
    <Card key={user}>
      <CardContent>
        <div>
          <iframe
            className="album-art"
            src={`https://open.spotify.com/embed/track/${track.item.id}`}
            width="100%"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
        <Typography gutterBottom variant="h5" component="h2">
          {songObject.user}
        </Typography>
      </CardContent>
    </Card>
  );
  // return (
  //   <li className="song-info">
  //   <span className="track">
  //     {props.song.user}:

  //     <iframe className="album-art" src={`https://open.spotify.com/embed/track/${props.song.track.item.id}`} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  //     </span>
  // </li>
  // );
}

export default withStyles(styles)(Song);
// id
// spotify_id
// auth_token
// refresh_token
