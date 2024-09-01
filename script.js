const apikey = "3429d49f1742283e2be536487b0e5e06";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bengaluru";

async function fetchweather() {
  const response = await fetch(apiurl + `&appid=${apikey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector("#location_name").innerHTML = data.name;

  document.querySelector("#temp").innerHTML = data.main.temp;
  document.querySelector("#mintemp").innerHTML = data.main.temp_min;
  document.querySelector("#maxtemp").innerHTML = data.main.temp_max;

  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#dewpoint").innerHTML = (data.main.temp - (100 - data.main.humidity) / 5).toFixed(1);
  document.querySelector("#pressure").innerHTML = data.main.pressure;

  document.querySelector("#windspeed").innerHTML = data.wind.speed;
  document.querySelector("#winddirection").innerHTML = data.wind.deg;
}
