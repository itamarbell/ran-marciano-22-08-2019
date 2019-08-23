import { observable, action } from  'mobx'

export class FavoritesStore {
    @observable favoriteCities = []

    @action pushToFavorites = (city) => {
        this.favoriteCities.push(city)
    } 

    @action removeFromFavorites = (cityName) => {
        let city = this.favoriteCities.find(c => c.name === cityName)
        let cityIndex = this.favoriteCities.indexOf(city)
        this.favoriteCities.splice(cityIndex, 1)
    } 
}