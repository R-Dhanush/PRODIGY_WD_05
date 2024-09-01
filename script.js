const apikey = "3429d49f1742283e2be536487b0e5e06";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchcity = document.querySelector("#searchinput");
const searchbtn = document.querySelector(".btn");
const weathericon = document.querySelector("#weather_icon");

async function fetchweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();

  document.querySelector("#location_name").innerHTML = data.name;

  document.querySelector("#temp").innerHTML = data.main.temp;
  document.querySelector("#mintemp").innerHTML = data.main.temp_min;
  document.querySelector("#maxtemp").innerHTML = data.main.temp_max;

  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#dewpoint").innerHTML = (data.main.temp - (100 - data.main.humidity) / 5).toFixed(1);
  document.querySelector("#pressure").innerHTML = data.main.pressure;

  document.querySelector("#windspeed").innerHTML = data.wind.speed;
  document.querySelector("#winddirection").innerHTML = data.wind.deg;

  if(data.weather[0].main == "Clear"){
    weathericon.src = "img/clear.png";
  }
  else if(data.weather[0].main == "Clouds"){
    weathericon.src = "img/clouds.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weathericon.src = "img/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weathericon.src = "img/mist.png";
  }
  else if(data.weather[0].main == "Rain"){
    weathericon.src = "img/rain.png";
  }
  else if(data.weather[0].main == "Snow"){
    weathericon.src = "img/snow.png";
  }

}

searchbtn.addEventListener("click", ()=>{
  fetchweather(searchcity.value);
  console.log(searchcity.value);
})