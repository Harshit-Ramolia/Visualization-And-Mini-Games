async function visualize({
  progressValueBinarySearch,
  progressValueLinearSearch,
  setColorBinary,
  setColorLinear,
  setIsBinaryEnded,
  setIsLinearEnded,
}) {
  setIsBinaryEnded(false);
  setIsLinearEnded(false);
  const maxSteps =
    Math.max(
      progressValueBinarySearch.length,
      progressValueLinearSearch.length
    ) - 1;
  for (let i = 0; i < maxSteps + 1; i++) {
    console.log(
      progressValueBinarySearch.length,
      progressValueLinearSearch.length
    );
    if (i > progressValueBinarySearch.length - 1) {
      console.log("AsDASd");
      setIsBinaryEnded(true);
    } else {
      setColorBinary(progressValueBinarySearch[i]);
    }
    if (i > progressValueLinearSearch.length-1) {
      setIsLinearEnded(true);
    } else {
      setColorLinear(progressValueLinearSearch[i]);
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  setIsBinaryEnded(true);
  setIsLinearEnded(true);
}

export default visualize;