export function randomColor() {
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // return '#' + randomColor;
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}
