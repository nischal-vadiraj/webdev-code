let divElement = document.querySelector('div');
let pElement = document.querySelector('p');
divElement.onmouseover = () => {
    pElement.textContent = "Hello there!";
}

let result = document.querySelector('input');
displayEventType = (event) => {
  console.log(event.type);
}
result.addEventListener('keydown', displayEventType);
result.addEventListener('keypress', displayEventType);
result.addEventListener('keyup', displayEventType);
result.addEventListener('mousedown', displayEventType);
result.addEventListener('mouseup', displayEventType);
result.addEventListener('click', displayEventType);