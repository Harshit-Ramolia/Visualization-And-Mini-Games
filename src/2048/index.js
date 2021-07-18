import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Board from "./Board";
import addNumber from "./functions/addNumber";
import checkGameOver from "./functions/checkGameOver";
import isEqual from "./functions/isEquale";
import { downMove, leftMove, rightMove, upMove } from "./functions/move";

export default function Game2048() {
  const [grid, setGrid] = useState(
    new Array(4).fill(0).map(() => new Array(4).fill(0))
  );
  const [addNumberSignal, setAddNumberSignal] = useState(true);
  const [gameOver, setGameOver] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    addNumber({ grid, setGrid });
  }, []);

  useEffect(() => {
    addNumber({ grid, setGrid });
  }, [addNumberSignal]);

  const keyPressed = (e) => {
    let newGrid;
    if (!gameOver) {
      switch (e.key) {
        case "ArrowLeft":
          newGrid = leftMove({ grid, setScore });
          if (!isEqual({ grid, newGrid })) {
            setGrid(newGrid);
            setAddNumberSignal((prev) => !prev);
          }
          break;
        case "ArrowUp":
          newGrid = upMove({ grid, setScore });
          if (!isEqual({ grid, newGrid })) {
            setGrid(newGrid);
            setAddNumberSignal((prev) => !prev);
          }
          break;
        case "ArrowRight":
          newGrid = rightMove({ grid, setScore });
          if (!isEqual({ grid, newGrid })) {
            setGrid(newGrid);
            setAddNumberSignal((prev) => !prev);
          }
          break;
        case "ArrowDown":
          newGrid = downMove({ grid, setScore });
          if (!isEqual({ grid, newGrid })) {
            setGrid(newGrid);
            setAddNumberSignal((prev) => !prev);
          }
          break;
        default:
      }
      setGameOver(checkGameOver({ grid }));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    return () => {
      document.removeEventListener("keydown", keyPressed);
    };
  });

  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="sm">
          <Typography variant="h4">2048</Typography>
          <Box p={2} />
          <Typography variant="h5">{`Score = ${score}`}</Typography>
          <Typography variant="h5">
            {gameOver === 1 ? "You lost" : gameOver === 1 ? "You Won" : ""}
          </Typography>
          <Box p={2} />
          <Board grid={grid} />
          <Link to="/">
            <Button color="primary" style={{ margin: "10px" }}>
              {`<= Home`}
            </Button>
          </Link>
        </Container>
      </Box>
    </React.Fragment>
  );
}
