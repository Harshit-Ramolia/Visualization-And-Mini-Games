import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "relative",
    height: "100px",
    border: "2px solid red",
  },
  rod: {
    width: "10px",
    height: "100%",
    background: "rgb(0,0,84)",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
  },
  disk: {
    height: "10px",
    width: "80%",
    background: "yellow",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
  },
}));

export default function TowerBoard({ init }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {[0, 1, 2].map((outerX) => (
          <Grid item xs={4} className={classes.box}>
            <div className={classes.rod} />
            <div className={classes.disk} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
