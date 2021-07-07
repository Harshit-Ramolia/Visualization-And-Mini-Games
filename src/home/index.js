import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Container maxWidth="lg" style={{ padding: "20px 0" }}>
        <Typography variant="h3" align="center">
          Algorithm Visualizations and Mini Games
        </Typography>
        <a
          href="https://www.linkedin.com/in/harshit-ramolia/"
          target="_blank"
          rel="noreferrer"
        >
          <Typography
            align="center"
            variant="body1"
            style={{ fontSize: "20px" }}
          >
            -Harshit Ramolia
          </Typography>
        </a>
        <Box p={2} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Card>
              <Link to="/sudoku">
                <CardActionArea>
                  <img
                    src="sudoku.png"
                    alt="sudoku"
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Sudoku Solution Visualizer
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <Link to="/binarysearch">
                <CardActionArea>
                  <img
                    src="binarysearch.png"
                    alt="Binary Search"
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Binary Search Vs. Linear Search
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <Link to="/towerofhanoi">
                <CardActionArea>
                  <img
                    src="binarysearch.png"
                    alt="Binary Search"
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Tower Of Hanoi
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <Link to="game2048">
                <CardActionArea>
                  <img
                    src="binarysearch.png"
                    alt="Binary Search"
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      2048
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card>
              <Link to="mergesort">
                <CardActionArea>
                  <img
                    src="mergesort.png"
                    alt="Merge Sort"
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      Merge Sort
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
