import './style.css'

const API_KEY = 'SG64JKKZXH2K8S8F9AB6G8JJ6'
let location = 'Thessaloniki'
const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

async function getWeatherData(location) {
    const response = await fetch(
        url + location + '?unitGroup=metric' + '&key=' + API_KEY
    )
    const data = await response.json()
    const filteredObj = filterData(data)
    console.log(filteredObj);
}

function filterData(data) {
    return {
        temp: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        currentTime: data.currentConditions.datetime,
        address: data.resolvedAddress,
    }
}

getWeatherData(location);