

fetch("https://api.openweathermap.org/data/3.0/onecall?lat=8.7510&lon=-75.8785&appid=d2f11315e7bfcd167717519acde6e49d")
  .then((response) => response.json())
  .then((data) => console.log(data));

  