import { observable, action } from  'mobx'

export class CityStore {
    @observable city
    @observable isSaved = false
    // @action handleInput = (name, value) => {
    //     this[name] = value
    // } 
}