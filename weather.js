const apiKey = "2dd38b7ed988440eb8caf8deed51ebc4";

async function checkWeather(city) {
  const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&country=India&key=2dd38b7ed988440eb8caf8deed51ebc4&include=minutely`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  const cityElem = document.getElementById("city");
  const temp = document.getElementById("temp");
  const visibility = document.getElementById("visibility");
  const wind = document.getElementById("wind");
  const clouds = document.getElementById("clouds");
  const timezone = document.getElementById("aqi");
  const precip = document.getElementById("precip");

  cityElem.innerHTML = city;
  temp.innerHTML = data.data[0].temp + "°C";
  visibility.innerHTML = data.data[0].vis + "km";
  wind.innerHTML = data.data[0].wind_spd + "km/h";
  clouds.innerHTML = data.data[0].clouds;
  timezone.innerHTML = data.data[0].aqi;
  precip.innerHTML = data.data[0].precip + "mm";
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("cityInput").value;
  checkWeather(cityInput);
});

// Add event listener for the "My Location" button
document.getElementById("myLocation").addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather("Chennai");
});

checkWeather("Chennai");
