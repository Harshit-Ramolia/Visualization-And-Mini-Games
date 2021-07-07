import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import solveSudoku from "./functions/solveSudoku";
import visualize from "./functions/visualize";
import SudokuBox from "./SudokuBox";

export default function Sudoku() {
  const [sudokuValue, setSudokuValue] = useState(
    new Array(9).fill(0).map(() => new Array(9).fill(0))
  );

  const [regenerate, setRegenerate] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    fetch("https://sugoku.herokuapp.com/board?difficulty=easy")
      .then((response) => response.json())
      .then((data) => {
        setSudokuValue(data.board);
      });
  }, [regenerate]);

  const handleVisualize = () => {
    let processes = solveSudoku(sudokuValue);
    visualize({
      processes,
      setSudokuValue,
      setInProgress,
      setProgressValue,
    });
  };

  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="sm">
          <Typography variant="h4">Sudoku Solution Visualizer</Typography>
          <Box p={2} />
          <LinearProgress variant="determinate" value={progressValue} />
          <Box p={2} />
          <SudokuBox sudokuValue={sudokuValue} />
          <Button
            onClick={() => setRegenerate((prev) => !prev)}
            variant="outlined"
            color="secondary"
            style={{ margin: "10px" }}
            disabled={inProgress}
          >
            Regenerate
          </Button>
          <Button
            onClick={handleVisualize}
            variant="outlined"
            color="primary"
            style={{ margin: "10px" }}
            disabled={inProgress}
          >
            Visualize
          </Button>
          <Box />
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
