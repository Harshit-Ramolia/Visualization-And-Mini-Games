import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "30px",
    height: "30px",
    border: "1px solid black",
    display: "inline-block",
    margin: "10px",
  },
}));

export default function DisplayArray({ arr, isColor }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {arr.map((item, idx) => {
        return (
          <Paper
            className={classes.box}
            style={{
              background: isColor[idx] === 1 ? "lightgreen" : "",
            }}
          >
            {item}
          </Paper>
        );
      })}
    </React.Fragment>
  );
}
