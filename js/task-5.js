function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const dfntColor = document.querySelector(".change-color");
const onChangeeColor = () => {
  const resColor = getRandomHexColor();
  document.body.style.backgroundColor = resColor;
  let colorSpan = document.querySelector(".color");
  colorSpan.textContent = resColor;
};
dfntColor.addEventListener("click", onChangeeColor);
