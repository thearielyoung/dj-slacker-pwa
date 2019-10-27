import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import "./PlayedSong.css";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  comment: {
    color: "#333"
  }
};

function PlayedSong(props) {
  const { classes, song: songObject } = props;
  const { spotify_id, track_id, likes } = songObject;
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");


  const handleLike = function(e, track) {
    fetch(`https://dj-slacker.herokuapp.com/rate?track_id=${track_id}`, {
      mode: "cors"
    })
      .then(results => {
        return results.json();
      })
      .catch(error => alert("An error happened " + error));
  }

  const handleDislike = function(e, track) {
      fetch(`https://dj-slacker.herokuapp.com/unlike?track_id=${track_id}`, {
        mode: "cors"
      })
      .then(results => {
        return results.json();
      })
      .catch(error => alert("An error happened " + error));
  };

  const addComment = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.persist();
      setComments(prevState => [...prevState, event.target.value]);
      setCurrentComment('');
    }
  };
  const handleCommentOnChange = event => {
    setCurrentComment(event.target.value);
  };

  return (
    <Card>
      <CardMedia
        component="iframe"
        className="album-art"
        src={`https://open.spotify.com/embed/track/${spotify_id}`}
        width="100%"
        height="95"
        allowtransparency="true"
        allow="encrypted-media"
        frameborder="0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Played {likes} times
        </Typography>
        <CardActionArea>
          <CardActions>

            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={e => handleLike(e, track_id)}
            >
              Like
            </Button>
          </CardActions>
          <TextField
            id="standard-comment"
            label="Comment"
            className={classes.textField}
            value={currentComment}
            onKeyDown={addComment}
            onChange={handleCommentOnChange}
            margin="normal"
          />
          {comments.map((c, i) => (
            <div key={i} style={styles.comment}>
              <p>{c}</p>
            </div>
          ))}
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PlayedSong);
// id
// spotify_id
// auth_token
// refresh_token
