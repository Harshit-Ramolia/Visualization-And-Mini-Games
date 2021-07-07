import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import myColor from "./functions/myColor";

const useStyles = makeStyles((theme) => ({
  box: {
    height: 400,
    width: 400,
    "@media (max-width: 720px)": {
      height: 80,
      width: 80,
    },
    position: "relative",
    background: "whitesmoke",
  },
  piece: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    height: 80,
    width: 80,
    background: "teal",
    color: "white",
    fontSize: "40px",
  },
}));

export default function Board({ grid }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box align="center">
        <Paper className={classes.box}>
          {[0, 1, 2, 3].map((x) => (
            <React.Fragment>
              {[0, 1, 2, 3].map((y) => (
                <React.Fragment>
                  {grid[x][y] !== 0 ? (
                    <Paper
                      className={classes.piece}
                      style={{
                        position: "absolute",
                        top: 100 * x,
                        left: 100 * y,
                        background: myColor(grid[x][y]),
                      }}
                    >
                      {grid[x][y]}
                    </Paper>
                  ) : (
                    <Paper
                      className={classes.piece}
                      style={{
                        position: "absolute",
                        top: 100 * x,
                        left: 100 * y,
                        background: "rgba(50,50,50,0.1)",
                      }}
                      elevation={0}
                    ></Paper>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </Paper>
      </Box>
    </React.Fragment>
  );
}
