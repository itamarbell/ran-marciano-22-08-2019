import React, {Component} from 'react'
import axios from 'axios'

class Api extends Component {
    constructor(){
        super()
        this.API_KEY = 'uuUVSmGWQ9hWzLPzNCbaaSnNtLr4ykjO'
        this.API_HOST = 'http://dataservice.accuweather.com/'
    }


    cityKeyUrl = (cityName) => `${this.API_HOST}locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${cityName}`

    currentConditionsUrl = cityKey => `${this.API_HOST}currentconditions/v1/${cityKey}?apikey=${this.API_KEY}`

    forecastsUrl = cityKey => `${this.API_HOST}forecasts/v1/daily/5day/${cityKey}?apikey=${this.API_KEY}&metric=true`

    getCityKey = (cityName) => {
    axios.get(this.cityKeyUrl(cityName))
        .then(function(response){
            return response.data[0].Key
            
        })
    }

    getCityForecasts = (cityName) => {
        axios.get(this.forecastsUrl(this.getCityKey(cityName)))
        .then(function(response){
            console.log(response.data.DailyForecasts)
            
        })
    }

    getCurrentConditions = (cityName) => {
        axios.get(this.currentConditionsUrl(this.getCityKey(cityName)))
        .then(function(response){
            console.log(response.data[0]) 
        })
    }

    render() {
        return (
            <div>
        
            </div>)
    }
}
export default Api