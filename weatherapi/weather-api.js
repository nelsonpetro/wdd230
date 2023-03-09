let card = document.createElement('section');
let infocontainer = document.createElement('div');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=8.7510&lon=-75.8785&units=imperial&appid=d2f11315e7bfcd167717519acde6e49d";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data);
      }else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function  displayResults(weatherData) {
    
    let widget = document.querySelector("#widget");

    let currTemp = document.createElement("p");
    let icon = document.createElement("img");
    let desc = document.createElement("figcaption");
    let iconTitle = document.createElement("p")

    currTemp.classList.add("temp");
    iconTitle.classList.add("icontitle");

    currTemp.innerHTML = `The current temperature in ${weatherData.name}, Cordoba is <strong>${weatherData.main.temp.toFixed(0)}</strong> °F`;
    desc.textContent = weatherData.weather[0].description;
    iconTitle.textContent = "Current Condition Icon"

    icon.setAttribute("src",`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    icon.setAttribute("alt", desc);

    widget.appendChild(currTemp);
    widget.appendChild(iconTitle);
    widget.appendChild(icon);
    widget.appendChild(desc);
}