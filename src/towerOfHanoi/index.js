import {
  Box,
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TowerBoard from "./TowerBoard";

export default function TowerOfHanoi() {
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

  const handleVisualize = () => {};

  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="sm">
          <Typography variant="h4">Tower Of Hanoi</Typography>
          <Box p={2} />
          {/* <Formik
            initialValues={{ numberOfDisks: '' }}
            validate={(values) => {
              const errors = {};
                console.log(Number(values.numberOfDisks))
            //   if (!Number(values.numberOfDisks)) {
            //     errors.numberOfDisks = "Only Number";
            //   }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Number Of Disks"
                  variant="outlined"
                  value={values.numberOfDisks}
                  onChange={handleChange}
                  helperText={errors.numberOfDisks ? "Incorrect entry." : ""}
                  error={errors.numberOfDisks}
                />
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik> */}

          {progressValue > 0 && (
            <LinearProgress variant="determinate" value={progressValue} />
          )}
          <Box p={2} />
          <TowerBoard />
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
