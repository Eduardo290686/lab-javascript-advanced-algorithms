let stackInput = document.getElementById('stack-input');
let stackAddButton = document.getElementById('stack-add-button');
let stackTakeButton = document.getElementById('stack-take-button');
let stackElementsList = document.getElementById('stack-elements-list');

let stackDataStructure = new StackDataStructure();

stackAddButton.onclick = function (btn) {
  btn.preventDefault();
  if (stackDataStructure.canPush() === true) {
    stackDataStructure.push(stackInput.value);
    paintingStackElement();
  } else {
    console.log(stackDataStructure.push());
  }
  stackInput.value = '';
}

stackTakeButton.onclick = function (btn) {
  btn.preventDefault();
  if (stackDataStructure.isEmpty() === false) {
    stackDataStructure.stackControl.pop();
    removingStackElement();
  }
  stackInput.value = '';
}

function paintingStackElement() {
  let newElementContainer = document.createElement('div');
  newElementContainer.setAttribute('class', 'element');
  let newElement = `<p class='list-element'>${stackDataStructure.stackControl[stackDataStructure.stackControl.length - 1]}</p>`;
  newElementContainer.innerHTML = newElement;
  stackElementsList.appendChild(newElementContainer);
}

function removingStackElement() {
  stackElementsList.innerHTML = "";
  stackDataStructure.stackControl.forEach(element => {
    let newElementContainer = document.createElement('div');
    newElementContainer.setAttribute('class', 'element');
    let newElement = `<p class='list-element'>${element}</p>`;
    newElementContainer.innerHTML = newElement;
    stackElementsList.appendChild(newElementContainer);
  })
}
