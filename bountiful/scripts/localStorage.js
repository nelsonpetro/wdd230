let count = localStorage.getItem('clickCount') || 0; 
console.log(`The button was clicked ${count} times.`);

let drinkCount = document.createElement("p");
drinkCount.textContent = count;

let specialDrinks = document.querySelector(".special-drinks");

specialDrinks.appendChild(drinkCount);