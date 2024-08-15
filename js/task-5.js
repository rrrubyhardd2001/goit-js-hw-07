function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const difColor = document.querySelector(".change-color");
console.log(difColor);
const onChangeColor = (event) => {
  const hexColorResult = getRandomHexColor();
  document.body.style.backgroundColor = hexColorResult;
  let colorSpan = document.querySelector(".color");
  colorSpan.textContent = hexColorResult;
};
difColor.addEventListener("click", onChangeColor);
