import './style.css'

const API_KEY = 'SG64JKKZXH2K8S8F9AB6G8JJ6'
let location = ''
const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

// Handle API access
async function getWeatherData(location) {
    const response = await fetch(
        url + location + '?unitGroup=metric' + '&key=' + API_KEY
    )
    const data = await response.json()
    displayWeather(filterData(data))
}
// Filter json data
function filterData(data) {
    return {
        temp: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        currentTime: data.currentConditions.datetime,
        address: data.resolvedAddress,
    }
}

// Handle user input

const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    location = search.value
    getWeatherData(location)
})

// Function to display weather data

function displayWeather(data) {
    const div = document.getElementById("weather-card")
    div.innerHTML = ""
    const content = `<h2>Location: ${data.address}</h2>
    <p>Time: ${data.currentTime}</p>
    <p>Conditions: ${data.conditions}</p>
    <p>Temperature: ${data.temp}</p>`
    div.innerHTML = content
    const app = document.querySelector('#app')
    app.append(div)
}
