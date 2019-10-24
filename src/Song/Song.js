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
import "./Song.css";

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

function Song(props) {
  const { classes, song: songObject } = props;
  const { user, track } = songObject;
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const handleLike = function(e) {};

  const handleDislike = function(e) {};
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
        src={`https://open.spotify.com/embed/track/${track.item.id}`}
        width="100%"
        height="95"
        allowtransparency="true"
        allow="encrypted-media"
        frameborder="0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {songObject.user}
        </Typography>
        <CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={e => handleLike(e)}
            >
              Like
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={e => handleDislike(e)}
            >
              Dislike
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

export default withStyles(styles)(Song);
// id
// spotify_id
// auth_token
// refresh_token
