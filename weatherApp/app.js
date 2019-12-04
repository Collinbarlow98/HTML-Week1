
let cityName = document.getElementById('cityName')
let cityWeatherUL = document.getElementById('cityWeatherUL')

searchButton.addEventListener('click', () => {
  let city = cityName.value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7d2dd8c9c5578b741c7735ad3f0d39ea&units=imperial`)
    .then((response) => {
      return response.json()
    })
    .then(json => {
      let cityWeather = `<li>${city}</li>
      <li>${json.main.pressure} psi</li>
      <li>${json.main.temp_max} farenheit</li>
      <li>${json.main.temp_min} Farenheit</li>`

      cityWeatherUL.innerHTML += cityWeather

      return cityWeatherUL
    })
  })

currentLocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=7d2dd8c9c5578b741c7735ad3f0d39ea&units=imperial`)
    .then((response) => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      let cityWeather = `<li>Current Location</li>
      <li>${json.main.pressure} psi</li>
      <li>${json.main.temp_max} farenheit</li>
      <li>${json.main.temp_min} Farenheit</li>`

      cityWeatherUL.innerHTML += cityWeather
      return cityWeatherUL
    })
  })
})
