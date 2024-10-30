import './style.css'

const app = document.querySelector('#app')
const API_KEY = 'SG64JKKZXH2K8S8F9AB6G8JJ6'
let location = ''
const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

// Handle API access
async function getWeatherData(location) {
    try {
        loading()
        const response = await fetch(
            url + location + '?unitGroup=metric' + '&key=' + API_KEY
        )
        const data = await response.json()
        displayWeather(filterData(data))
    } catch (error) {
        console.error(error)
    }
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
    removeLoading()
    const div = document.getElementById('weather-card')
    div.innerHTML = ''
    const content = `<h2>Location: ${data.address}</h2>
    <p>Time: ${data.currentTime}</p>
    <p>Conditions: ${data.conditions}</p>
    <p>Temperature: ${data.temp}</p>`
    div.innerHTML = content
    app.append(div)
}

function loading() {
    const div = document.createElement("div")
    div.className = 'loader'
    app.append(div)
}

function removeLoading() {
    const div = document.querySelector("div + .loader")
    div.remove()
}