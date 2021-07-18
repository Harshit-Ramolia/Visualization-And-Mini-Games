import { CircularProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Game2048 from "./2048";
import BinarySearch from "./binarySearch";
import Home from "./home";
import MergeSort from "./mergesort";
import Sudoku from "./sudoku";
import TowerOfHanoi from "./towerOfHanoi";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Suspense
          fallback={
            <CircularProgress
              color="secondary"
              style={{ position: "absolute", top: "50%", left: "50%" }}
            />
          }
        >
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/sudoku">
              <Sudoku />
            </Route>
            <Route path="/game2048">
              <Game2048 />
            </Route>
            <Route path="/towerofhanoi">
              <TowerOfHanoi />
            </Route>
            <Route path="/binarySearch">
              <BinarySearch />
            </Route>
            <Route path="/mergesort">
              <MergeSort />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
