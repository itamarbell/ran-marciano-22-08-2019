import { observable, action } from  'mobx'
import axios from 'axios'
import KeyDaya from '../stores/key.json'
import ForeCastsData from '../stores/forecasts.json'


export class CityStore {
    @observable city = {}
    @observable cityNameInput
    @observable isSaved = false

    @action handleInput = value => this.cityNameInput = value

    @action handleSavings = () => this.isSaved = !this.isSaved

    @action searchCity =  () => {
        // axios.get(this.cityKeyUrl(this.cityNameInput))
        // .then((response) =>{
        //     this.city.key = response.data[0].Key
        //     this.city.name = response.data[0].LocalizedName
        //     this.getCityForecasts(this.city.key)  
        // })
        let data = KeyDaya
        this.city.key = data[0].Key
        this.city.name = data[0].LocalizedName
        this.getCityForecasts(this.cityKey)
    }

    constructor(){
        this.API_KEY = 'uuUVSmGWQ9hWzLPzNCbaaSnNtLr4ykjO'
        this.API_HOST = 'http://dataservice.accuweather.com/'
    }

    cityKeyUrl = cityName => `${this.API_HOST}locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${cityName}`
     
    forecastsUrl = cityKey => `${this.API_HOST}forecasts/v1/daily/5day/${cityKey}?apikey=${this.API_KEY}&metric=true`

    getCityForecasts = (cityKey) => {
        // axios.get(this.forecastsUrl(cityKey))
        // .then((response) => {
        //     this.city.forecasts = response.data.DailyForecasts.map(f => {
        //        return  {date: f.Date,
        //                 day: f.Day,
        //                 temperature:  f.Temperature
        //                 }})
        //     console.log( this.city)
            
        // })
        // })
        let data = ForeCastsData
        this.city.forecasts = data.DailyForecasts.map(f => {
               return  {date: f.Date,
                        day: f.Day,
                        temperature:  f.Temperature
                        }})
    }
}   


