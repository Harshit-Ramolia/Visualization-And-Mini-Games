async function visualize({ processes, setArray, setIsColor, setInProgress }) {
  setInProgress(true);
  for (const value of processes) {
    const colors = Array(value.length);
    setArray((prev) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== value[i]) {
          colors[i] = 1;
        } else {
          colors[i] = 0;
        }
      }
      return [...value];
    });
    setIsColor([...colors]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  setIsColor([...Array(processes[0].length).fill(0)]);
  setInProgress(false);
}

export default visualize;
