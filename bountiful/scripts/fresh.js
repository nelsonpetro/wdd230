
let selectedFruits = [];

let fruitData;

async function fruits() {
try {
    const response = await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json");
    fruitData = await response.json();

    let fruit1List = document.querySelector("#fruit1");
    let fruit2List = document.querySelector("#fruit2");
    let fruit3List = document.querySelector("#fruit3");

    fruitData.forEach(fruit => {
      fruit1List.innerHTML = `${fruit1List.innerHTML}<option value=${fruit.name}>${fruit.name}</option>`;
      fruit2List.innerHTML = `${fruit2List.innerHTML}<option value=${fruit.name}>${fruit.name}</option>`;
      fruit3List.innerHTML = `${fruit3List.innerHTML}<option value=${fruit.name}>${fruit.name}</option>`;
    });

    fruit1List.addEventListener('change', function() {
      let value1 = fruit1List.options[fruit1List.selectedIndex].value;
      selectedFruits.push(value1);
    });

    fruit2List.addEventListener('change', function() {
      let value2 = fruit2List.options[fruit2List.selectedIndex].value;
      selectedFruits.push(value2);
    });

    fruit3List.addEventListener('change', function() {
      let value3 = fruit3List.options[fruit3List.selectedIndex].value;
      selectedFruits.push(value3);
    });
  } catch (error) {
  console.log("There is an error: ", error);
  }
}

let count = localStorage.getItem('clickCount') || 0; 

fruits().then(() => {
  const button = document.querySelector(".submitBtn");
  button.addEventListener("click", function(event){
    event.preventDefault();

    const order = document.querySelector(".orderInfo");
    const fname = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const instructions = document.querySelector("#instructions").value;

    if (!fname || !email || !phone || (selectedFruits.length < 3)) {
      alert("Please fill out the required fields!");
      return;
    }
    order.classList.add("orderSec");

    let img = document.querySelector(".drink-img");
    img.style.maxWidth = "300px";
    let carbs = fruitData.filter(fruit => selectedFruits.includes(fruit.name)).reduce((acc, fruit) => acc + fruit.nutritions.carbohydrates, 0);
    let protein = fruitData.filter(fruit => selectedFruits.includes(fruit.name)).reduce((acc, fruit) => acc + fruit.nutritions.protein, 0);
    let fat = fruitData.filter(fruit => selectedFruits.includes(fruit.name)).reduce((acc, fruit) => acc + fruit.nutritions.fat, 0);
    let sugar = fruitData.filter(fruit => selectedFruits.includes(fruit.name)).reduce((acc, fruit) => acc + fruit.nutritions.sugar, 0);
    let cal = fruitData.filter(fruit => selectedFruits.includes(fruit.name)).reduce((acc, fruit) => acc + fruit.nutritions.calories, 0);
    let date = new Date();
    let formattedDate = date.toLocaleDateString('en-GB');

    let title1 = document.createElement("h2");
    title1.textContent = "Thank you for you order!";
    let title2 = document.createElement("h3");
    title2.textContent = "These are the details";
    let dateText = document.createElement("P");
    dateText.textContent = formattedDate;
    let name = document.createElement("h3")
    name.textContent = toTitleCase(fname);
    let emailText = document.createElement("h4")
    emailText.textContent = email;
    let phoneText = document.createElement("h4")
    phoneText.textContent = phone;
    let fruitsLabel = document.createElement("h4");
    fruitsLabel.textContent = `${toTitleCase(fname)}'s special creation!`
    let instructionsText = document.createElement("p");
    let fruit1 = document.createElement("p");
    fruit1.textContent = selectedFruits[0];
    let fruit2 = document.createElement("p");
    fruit2.textContent = selectedFruits[1];
    let fruit3 = document.createElement("p");
    fruit3.textContent = selectedFruits[2];
    instructionsText.textContent = instructions;
    let nutrition = document.createElement("h3");
    nutrition.textContent = "Nutrition Facts";
    let carbsText = document.createElement("p");
    carbsText.innerHTML = `<strong>Total carbohydrates: </strong>${carbs.toFixed(2)}`;
    let proteinText = document.createElement("p");
    proteinText.innerHTML = `<strong>Total protein: </strong>${protein.toFixed(2)}`;
    let fatText = document.createElement("p");
    fatText.innerHTML = `<strong>Total fat: </strong>${fat.toFixed(2)}`;
    let sugarText = document.createElement("p");
    sugarText.innerHTML = `<strong>Total sugar: </strong>${sugar.toFixed(2)}`;
    let calText = document.createElement("p");
    calText.innerHTML = `<strong>Total calories: </strong>${cal.toFixed(2)}`;
    let instructionsLabel = document.createElement("h4");
    instructionsLabel.textContent = "Aditiona details, if any"

    order.appendChild(title1);
    order.appendChild(title2);
    order.appendChild(dateText);
    order.appendChild(name);
    order.appendChild(emailText);
    order.appendChild(phoneText);
    order.appendChild(fruitsLabel);
    order.appendChild(fruit1);
    order.appendChild(fruit2);
    order.appendChild(fruit3);
    order.appendChild(carbsText);
    order.appendChild(proteinText);
    order.appendChild(fatText);
    order.appendChild(sugarText);
    order.appendChild(calText);
    order.appendChild(instructionsLabel);
    order.appendChild(instructionsText);
    
    count++;
    localStorage.setItem('clickCount', count);
  });
});

function toTitleCase(str) {
  return str.replace(
      /([^\W_]+[^\s-]*) */g,
      function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
  }






