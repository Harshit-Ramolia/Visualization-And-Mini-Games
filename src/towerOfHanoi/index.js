import {
  Box,
  Button,
  Container,
  FormControl,
  LinearProgress,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import solveTower from "./functions/solveTower";
import visualize from "./functions/visualize";
import TowerBoard from "./TowerBoard";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TowerOfHanoi() {
  const classes = useStyles();
  const [diskState, setDiskState] = useState([[1, 2, 3], [], []]);
  const [inProgress, setInProgress] = useState(false);
  const [noOfDisk, setNoOfDisk] = React.useState(3);

  const handleChange = (event) => {
    setNoOfDisk(event.target.value);
    setDiskState([
      [...Array.from({ length: event.target.value }, (_, i) => i + 1)],
      [],
      [],
    ]);
  };

  const handleVisualize = () => {
    let processes = solveTower(noOfDisk);
    visualize({ processes, setInProgress, setDiskState });
  };

  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="sm">
          <Typography variant="h4">Tower Of Hanoi</Typography>
          <Box p={2} />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">No Of Disk</InputLabel>
            <Select
              disabled={inProgress}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={noOfDisk}
              onChange={handleChange}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <Box p={2} />
          <TowerBoard diskState={diskState} noOfDisk={noOfDisk} />
          <Box p={2} />
          <Button
            onClick={handleVisualize}
            variant="outlined"
            color="primary"
            style={{ margin: "10px" }}
            disabled={inProgress}
          >
            Visualize
          </Button>
          <Box p={2} />
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
