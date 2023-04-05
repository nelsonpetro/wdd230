const currentWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&units=imperial&appid=d2f11315e7bfcd167717519acde6e49d")
    .then((response) => {
      return response.json();
    }).then(data => {
      console.log(data);
        let description = document.querySelector("#description");
        description.textContent = toTitleCase(data.weather[0].description);
        let icon = document.createElement("img");
        icon.setAttribute("class", "icon");
        icon.setAttribute("alt", "current weather icon");
        document.querySelector(".icon-desc").appendChild(icon);
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector("#w-name").textContent = `Weather in ${data.name}`
        document.querySelector("#temp").textContent = `${data.main.temp.toFixed(0)} °F`;
        document.querySelector("#humidity").textContent = `${data.main.humidity}%`
        document.querySelector("#wspeed").textContent = `${data.wind.speed} mph`;
        let temp = data.main.temp;
        let wspeed = data.wind.speed;
        document.querySelector("#wchill").textContent = temp > 50 ? "No windchill factor for this temperature" : wspeed < 3 ? "No windchill factor for this wind speed" : `${(35.74 + (0.6215*temp) - (35.75*(wspeed**0.16)) + (0.4275*temp*(wspeed**0.16))).toFixed(2)} °F`;
    }).catch(err => {
      console.log("There is an error");
    });
}

const weatherForecast = function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=30&units=imperial&appid=d2f11315e7bfcd167717519acde6e49d")
    .then((response) => {
      return response.json();
    }).then(data => {
      console.log(data);
      for(let i = 4; i <= 20; i+=8){
        let forecast = document.createElement("section");
        let day = document.createElement("p");
        let time = document.createElement("p");
        let temp = document.createElement("p");
        let description = document.createElement("p");
        let icon = document.createElement("img");
        let descIcon = document.createElement("div");
        icon.setAttribute("class", "icon");
        icon.setAttribute("alt", "current weather icon");
        descIcon.setAttribute("class", "iconContainer");
        console.log(data.list[i].dt_txt.split(" ")[0]);
        try {
          const options = {
            timeZone: 'America/Los_Angeles',
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          };
          day.innerHTML = `<span class="highlight">${new Date(data.list[i].dt_txt).toLocaleDateString("en-US", options)}</span>`;
        } catch (e) {
          console.log("Error with code or your browser does not support Locale");
        }

        time.innerHTML = `<strong>Time: </strong>${data.list[i].dt_txt.split(" ")[1]}`;
        temp.innerHTML = `<strong>Temperature: </strong>${data.list[i].main.temp.toFixed(0)} °F`
        description.innerHTML = `<strong>Description: </strong>${toTitleCase(data.list[i].weather[0].description)}`
        icon.src = `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`; 
        forecast.appendChild(day);
        forecast.appendChild(time);
        forecast.appendChild(temp);
        descIcon.appendChild(description);
        descIcon.appendChild(icon);
        forecast.appendChild(descIcon);
        document.querySelector("#forecast-container").appendChild(forecast)
      }
    }).catch(err => {
      console.log("There is an error");
    });
}

weatherForecast();
  
currentWeather();
  
function toTitleCase(str) {
return str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
);
}

