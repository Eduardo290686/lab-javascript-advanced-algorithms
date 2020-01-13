let queueInput = document.getElementById('queue-input');
let queueAddButton = document.getElementById('queue-add-button');
let queueTakeButton = document.getElementById('queue-take-button');
let queueElementsList = document.getElementById('queue-elements-list');

let queueDataStructure = new QueueDataStructure();

queueAddButton.onclick = function (btn) {
  btn.preventDefault();
  if (queueDataStructure.canEnqueue() === true) {
    queueDataStructure.enqueue(queueInput.value);
    paintingQueueElement();
  }
  queueInput.value = '';
}

queueTakeButton.onclick = function (btn) {
  btn.preventDefault();
  if (queueDataStructure.isEmpty() === false) {
    queueDataStructure.queueControl.pop();
    removingQueueElement();
  }
  queueInput.value = '';
}

function paintingQueueElement() {
  queueElementsList.innerHTML = "";
  queueDataStructure.queueControl.forEach(element => {
    let newElementContainer = document.createElement('div');
    newElementContainer.setAttribute('class', 'element');
    let newElement = `<p class='list-element'>${element}</p>`;
    newElementContainer.innerHTML = newElement;
    queueElementsList.appendChild(newElementContainer);
  })
}

function removingQueueElement() {
  queueElementsList.innerHTML = "";
  queueDataStructure.queueControl.forEach(element => {
    let newElementContainer = document.createElement('div');
    newElementContainer.setAttribute('class', 'element');
    let newElement = `<p class='list-element'>${element}</p>`;
    newElementContainer.innerHTML = newElement;
    queueElementsList.appendChild(newElementContainer);
  })
}
