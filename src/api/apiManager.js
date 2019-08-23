//import axios from 'axios'

const axios = require('C:\Users\ran\Documents\bootcamp\projects\react-weather-app\node_modules\axios\dist\axios.min.js')

const API_KEY = 'uuUVSmGWQ9hWzLPzNCbaaSnNtLr4ykjO'
const API_HOST = 'http://dataservice.accuweather.com/'

const cityKeyUrl = (cityName) => `${API_HOST}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityName}`

const currentConditionsUrl = cityKey => `${API_HOST}currentconditions/v1/${cityKey}?apikey=${API_KEY}`

const forecastsUrl = cityKey => `${API_HOST}forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`

const getCityKey = function(cityName){
    axios.get(cityKeyUrl(cityName))
        .then(function(response){
            console.log(response)
            console.log(response.body)
            console.log(JSON.parse(response.body))
        })
}

getCityKey('tel aviv')
// export default function getLocations() {
//   return fetch(LocationApiUrl('topcities', 50)).then(response => response.json())
// }
// export function getWeather(key) {
//   return fetch(WeatherApiUrl(key))
//     .then(response => response.json())
// }