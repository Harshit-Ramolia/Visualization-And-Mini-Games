async function visualize({ processes, setDiskState, setInProgress }) {
  setInProgress(true);
  for (const value of processes) {
    setDiskState([...value]);
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
  setInProgress(false);
}

export default visualize;
