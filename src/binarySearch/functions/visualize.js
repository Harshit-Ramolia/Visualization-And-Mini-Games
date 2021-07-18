async function visualize({
  progressValueBinarySearch,
  progressValueLinearSearch,
  setColorBinary,
  setColorLinear,
  setIsBinaryEnded,
  setIsLinearEnded,
  setInProgress,
}) {
  setInProgress(true);
  setIsBinaryEnded(false);
  setIsLinearEnded(false);
  const maxSteps =
    Math.max(
      progressValueBinarySearch.length,
      progressValueLinearSearch.length
    ) - 1;
  for (let i = 0; i < maxSteps + 1; i++) {
    if (i > progressValueBinarySearch.length - 1) {

      setIsBinaryEnded(true);
    } else {
      setColorBinary(progressValueBinarySearch[i]);
    }
    if (i > progressValueLinearSearch.length - 1) {
      setIsLinearEnded(true);
    } else {
      setColorLinear(progressValueLinearSearch[i]);
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  setIsBinaryEnded(true);
  setIsLinearEnded(true);
  setInProgress(false);
}

export default visualize;
