let result1 = document.querySelector('p');
result1.textContent = "Try copying this text.";
const handleCopy = () => {
  console.log("Data Copied");
}
result1.addEventListener('copy', handleCopy);

let result2 = document.querySelector('input');
const handleSelect = (data) => {
  console.log(data);
}
result2.addEventListener('select', () => handleSelect('Data Selected'));

let clickStatus = document.querySelector('h2');
clickStatus.addEventListener("click", (e) => clickStatus.textContent = "This text was clicked ");

const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.style.backgroundColor = "blue";
    item.style.color = "white";
	});
});

