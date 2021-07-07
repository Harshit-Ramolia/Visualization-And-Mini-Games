import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Board from "./Board";
import init from "./functions/init";

export default function Game2048() {
  const [grid, setGrid] = useState(
    new Array(4).fill(0).map(() => new Array(4).fill(0))
  );
  useEffect(() => {
    init({ grid, setGrid });
  }, []);

  return (
    <React.Fragment>
      <Box p={5} align="center">
        <Container maxWidth="sm">
          <Typography variant="h4">2048</Typography>
          <Box p={2} />
          <Board grid={grid} />
          {/* <Button
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
          </Button> */}
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
