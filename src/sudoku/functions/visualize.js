async function visualize({
  processes,
  setSudokuValue,
  setInProgress,
  setProgressValue,
}) {
  setInProgress(true);
  let counter = 1;
  for (const value of processes) {
    setSudokuValue([...value]);
    await new Promise((resolve) => setTimeout(resolve, 1));
    counter += 1;
    setProgressValue((counter * 100) / processes.length);
  }
  setInProgress(false);
}

export default visualize;
