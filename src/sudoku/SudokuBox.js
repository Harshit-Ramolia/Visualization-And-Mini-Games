import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({

  paper: {
    height: 150,
    width: 150,
    "@media (max-width: 720px)": {
      height: 80,
      width: 80,
    },
  },
  paper2: {
    height: 45,
    width: 45,
    border: "1px solid rgba(0,0,0,0.5)",
    "@media (max-width: 720px)": {
      height: 20,
      width: 20,
    },
  },
  Display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export default function SudokuBox({ sudokuValue }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        {[0, 1, 2].map((outerX) => (
          <Grid item xs={12} key={outerX}>
            <Grid container justify="center" spacing={0}>
              {[0, 1, 2].map((outerY) => (
                <Grid key={outerY} item>
                  <Paper className={classes.paper}>
                    <Grid container spacing={0}>
                      {[0, 1, 2].map((innerX) => (
                        <Grid item xs={12} key={innerX}>
                          <Grid container justify="center" spacing={0}>
                            {[0, 1, 2].map((innerY) => (
                              <Grid key={innerY} item>
                                <Paper className={classes.paper2} elevation={0}>
                                  <Grid
                                    container
                                    spacing={0}
                                    className={classes.Display}
                                  >
                                    {sudokuValue[outerX * 3 + innerX][
                                      outerY * 3 + innerY
                                    ] !== 0
                                      ? sudokuValue[outerX * 3 + innerX][
                                          outerY * 3 + innerY
                                        ]
                                      : " "}
                                  </Grid>
                                </Paper>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
