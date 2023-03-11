const currentWeather = function() {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=8.7510&lon=-75.8785&units=imperial&appid=d2f11315e7bfcd167717519acde6e49d")
  .then((response) => {
    return response.json();
  }).then(data => {
    console.log(data);
      let description = document.querySelector("#description");
      description.textContent = toTitleCase(data.weather[0].description);
      description.style.fontSize = "1.3em";
      description.style.fontFamily = 'Montserrat';
      description.style.fontWeight = 700;
      let icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      document.querySelector(".icon-desc").appendChild(icon);
      icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
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

currentWeather();

function toTitleCase(str) {
  return str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
//windchill factor f = 35.74 + (0.6215*temp) - ((35.75*(windspeed))**0.16) + ((0.4275*(windspeed))**0.16)