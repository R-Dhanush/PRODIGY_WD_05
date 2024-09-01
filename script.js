const apikey = "3429d49f1742283e2be536487b0e5e06";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchcity = document.querySelector("#searchinput");
const searchbtn = document.querySelector(".btn");
const weathericon = document.querySelector("#weather_icon");

async function fetchweather(city) {
  try {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (!response.ok) {
      throw new Error("City not found or network error occurred");
    }

    const data = await response.json();

    if (!data.main || !data.weather) {
      throw new Error("Unexpected response format from API");
    }

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

    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
      layer.classList.add('expanded');
      setTimeout(() => {
        layer.classList.remove('expanded');
      }, 5000);
    });

  } catch (error) {
    alert("Please enter a valid city");
    console.error("Error fetching weather data:", error);
    document.querySelector("#temp").innerHTML = "N/A";
    document.querySelector("#mintemp").innerHTML = "N/A";
    document.querySelector("#maxtemp").innerHTML = "N/A";
    document.querySelector("#humidity").innerHTML = "N/A";
    document.querySelector("#dewpoint").innerHTML = "N/A";
    document.querySelector("#pressure").innerHTML = "N/A";
    document.querySelector("#windspeed").innerHTML = "N/A";
    document.querySelector("#winddirection").innerHTML = "N/A";
    weathericon.src = "";
  }
}

searchbtn.addEventListener("click", () => {
  const city = searchcity.value.trim();
  if (city) {
    fetchweather(city);
  } else {
    alert("Please enter a city name");
  }
});
