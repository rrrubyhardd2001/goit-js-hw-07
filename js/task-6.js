function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainInput = document.querySelector('#controls input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

function createBoxes(amount) {
  const boxFolder = document.getElementById('boxes');
  boxFolder.innerHTML = "";
  let fragment = document.createDocumentFragment()
  let boxSize = 30;
  for (i = 0; i < amount; i++) {
    let boxWhoops = document.createElement('div');
    boxSize += 10;
    boxWhoops.style.width = `${boxSize}px`;
    boxWhoops.style.height = `${boxSize}px`;
    boxWhoops.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(boxWhoops)
  }
  boxFolder.appendChild(fragment)
}

createBtn.addEventListener('click', () =>  {
  let amount = mainInput.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    mainInput.value = '';
  } else {
    alert("Write number from 1 to 100")
  }
});

function destroyBoxes() {
  const boxFolder = document.getElementById('boxes')
  boxFolder.innerHTML = "";
}
destroyBtn.addEventListener('click', () => {
  destroyBoxes()
})
