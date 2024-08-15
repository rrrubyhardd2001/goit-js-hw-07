const inputFolder = document.querySelector("#name-input");
const outputFolder = document.querySelector("#name-output");
console.log(inputFolder);
console.log(outputFolder);
inputFolder.addEventListener("input", () => {
  const rezult = inputFolder.value.trim();
  if (rezult) {
    outputFolder.textContent = rezult
  } else {
    outputFolder.textContent = "Anonymous"
  }
});
