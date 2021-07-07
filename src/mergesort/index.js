import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayArray from "./DisplayArray";
import generateArray from "./functions/generateArray";
import mergeSort from "./functions/mergeSort";
import visualize from "./functions/visualize";

export default function MergeSort() {
  const [regenerate, setRegenerate] = useState(false);
  const [array, setArray] = useState([]);
  const [isColor, setIsColor] = useState([]);
  const [isEnded, setIsEnded] = useState(false);
  useEffect(() => {
    generateArray(setArray);
  }, [regenerate]);
  const handleVisualize = () => {
    // console.log(mergeSort(array));
    const processes = mergeSort([...array]);
    visualize({ processes, setArray, setIsColor, setIsEnded });
    // console.log(array);
  };
  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="lg">
          <Typography variant="h4">Merge Sort</Typography>
          <Box p={2} />
          <DisplayArray arr={array} isColor={isColor} />
          {/* <DisplayArray
            arr={linearSearch}
            color={colorLinear}
            didWin={didWin}
            isEnded={isLinearEnded}
          /> */}
          <Box p={2} />
          <Button
            onClick={() => setRegenerate((prev) => !prev)}
            variant="outlined"
            color="secondary"
            style={{ margin: "10px" }}
          >
            Regenerate
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ margin: "10px" }}
            onClick={handleVisualize}
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
