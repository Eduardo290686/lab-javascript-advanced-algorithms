let stackInput = document.getElementById('stack-input');
let stackAddButton = document.getElementById('stack-add-button');
let stackElementsList = document.getElementById('stack-elements-list');

let stackDataStructure = new StackDataStructure();

stackAddButton.onclick = function (btn) {
  btn.preventDefault();
  if (stackDataStructure.canPush() === true) {
    stackDataStructure.push(stackInput.value);
    paintingStackElement();
  }
  stackInput.value = '';
}

function paintingStackElement() {
  let newElementContainer = document.createElement('div');
  newElementContainer.setAttribute('class', 'element');
  let newElement = `<p>${stackDataStructure.stackControl[stackDataStructure.stackControl.length - 1]}</p>`;
  newElementContainer.innerHTML = newElement;
  stackElementsList.appendChild(newElementContainer);
}
