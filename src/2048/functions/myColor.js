function myColor(a) {
  if (a === 2) {
    return "#E8554E";
  }
  if (a === 4) {
    return "#F19C65";
  }
  if (a === 8) {
    return "#FFD265";
  }
  if (a === 16) {
    return "#2AA876";
  }
  if (a === 32) {
    return "#0A7B83";
  }
  if (a === 64) {
    return "#8916E5";
  }
  if (a === 128) {
    return "#FF4401";
  }
  return "#FEBFCA";
}

export default myColor;
