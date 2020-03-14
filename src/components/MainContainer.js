import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Select from "../common/Select";

import "react-lazy-load-image-component/src/effects/blur.css";
const useStyles = makeStyles(theme => ({
  mainContainer: {
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  imageContainer: {
    // position: "relative"
    // display: "inline-block",
    // overflow: "hidden",
    // margin: 0
  }
}));

export default function MainContainer({ urlImage, fetchImage, breeds }) {
  const classes = useStyles();
  const [selectedBreed, setBreed] = useState("");
  return (
    <div className="main-container">
      <Grid container spacing={3}>
        <Grid className={classes.mainContainer} item xs={12}>
          <Paper className={classes.paper}>
            <Select
              onChange={e => fetchImage(e.target.value)}
              breeds={breeds}
            />
          </Paper>
        </Grid>
        <Grid className={classes.imageContainer} item xs={12}>
          {/* <img
            className="img-styling"
            alt={props.urlImage}
            src={props.urlImage}
          /> */}
          <LazyLoadImage
            className="img-styling"
            alt={urlImage}
            src={urlImage}
            // effect="blur"
            width={"100%"}
            height="410"
          />
        </Grid>
      </Grid>
    </div>
  );
}
