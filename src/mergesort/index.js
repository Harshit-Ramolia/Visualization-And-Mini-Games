import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayArray from "./DisplayArray";
import generateArray from "./functions/generateArray";

export default function MergeSort() {
  const [regenerate, setRegenerate] = useState(false);
  const [array, setArray] = useState([]);
  useEffect(() => {
    generateArray(setArray);
  }, [regenerate]);
  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="lg">
          <Typography variant="h4">Merge Sort</Typography>
          <Box p={2} />
          <DisplayArray arr={array} />
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
