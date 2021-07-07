import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import generateArray from "./functions/generateArray";
import DisplayArray from "./DisplayArray";
import binarySearchFunction from "./functions/binarySearch";
import linearSearchFunction from "./functions/linearSearch";
import visualize from "./functions/visualize";

export default function BinarySearch() {
  // const [arr, setArr] = useState([]);
  const [binarySearch, setBinarySearch] = useState([]);
  const [linearSearch, setLinearSearch] = useState([]);
  const [colorBinary, setColorBinary] = useState(null);
  const [colorLinear, setColorLinear] = useState(null);
  const [isBinaryEnded, setIsBinaryEnded] = useState(false);
  const [isLinearEnded, setIsLinearEnded] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [number, setNumber] = useState(1);
  const [regenerate, setRegenerate] = useState(false);
  useEffect(() => {
    generateArray(setBinarySearch, setLinearSearch, setNumber);
    setColorBinary(null);
    setColorLinear(null);
    setIsBinaryEnded(false);
    setIsLinearEnded(false);
    setDidWin(false);
  }, [regenerate]);
  const handleVisualize = () => {
    let progressValueBinarySearch = binarySearchFunction(
      binarySearch,
      number,
      setDidWin
    );
    let progressValueLinearSearch = linearSearchFunction(linearSearch, number);
    visualize({
      progressValueBinarySearch,
      progressValueLinearSearch,
      setColorBinary,
      setColorLinear,
      setIsBinaryEnded,
      setIsLinearEnded,
    });
  };
  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="lg">
          <Typography variant="h4">Binary Search Vs. Linear Search</Typography>
          <Box p={2} />
          <Typography variant="h6">Searching for {number}</Typography>
          <Box p={2} />
          <Typography variant="h6">Binary Search</Typography>
          <DisplayArray
            arr={binarySearch}
            color={colorBinary}
            didWin={didWin}
            isEnded={isBinaryEnded}
          />
          <Typography variant="h6">Linear Search</Typography>
          <DisplayArray
            arr={linearSearch}
            color={colorLinear}
            didWin={didWin}
            isEnded={isLinearEnded}
          />
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
