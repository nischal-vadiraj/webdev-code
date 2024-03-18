let unControlledHeading = document.querySelectorAll(".all-headings")[0];
unControlledHeading.style.fontSize = "xx-small";

let controlledHeading = document.querySelectorAll(".all-headings")[1];

let allButtons = document.querySelectorAll("button");
for (let button of allButtons) {
  button.addEventListener("click", handleClick);
}
function handleClick(event) {
  controlledHeading.style.fontSize = event.target.value;
}

