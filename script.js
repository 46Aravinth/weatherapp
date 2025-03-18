const apiKey = '1d535b71f2b99c080af83576dbf6d0db'; // Replace with your OpenWeatherMap API Key

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
  const city = document.getElementById('city').value;
  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          displayWeather(data);
        } else {
          alert("City not found. Please try again.");
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data.');
      });
  } else {
    alert('Please enter a city name.');
  }
}

function displayWeather(data) {
  document.getElementById('weatherDetails').style.display = 'block';

  document.getElementById('cityName').textContent = `City: ${data.name}`;
  document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;
}