const currentWeather = function() {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=8.7510&lon=-75.8785&units=imperial&appid=d2f11315e7bfcd167717519acde6e49d")
  .then((response) => {
    return response.json();
  }).then(data => {
    console.log(data);
      let description = document.querySelector("#description");
      description.textContent = data.weather[0].description;
      description.style.fontSize = "1.5em";
      description.style.fontFamily = 'Montserrat';
      let icon = document.createElement("img");
      icon.setAttribute("class", "icon");
      document.querySelector(".icon-desc").appendChild(icon);
      icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.querySelector("#temp").textContent = `${data.main.temp} °F`;
      document.querySelector("#humidity").textContent = `${data.main.humidity}%`
      document.querySelector("#wspeed").textContent = `${data.wind.speed} mph`;
      let temp = data.main.temp;
      let wspeed = data.wind.speed;
      document.querySelector("#wchill").textContent = `${(35.74 + (0.6215*temp) - ((35.75*(wspeed))**0.16) + ((0.4275*(wspeed))**0.16)).toFixed(2)} °F`;
  }).catch(err => {
    console.log("There is an error");
  });
}

currentWeather();

//windchill factor f = 35.74 + (0.6215*temp) - ((35.75*(windspeed))**0.16) + ((0.4275*(windspeed))**0.16)