import React, {Component} from 'react'
import { Paper, Grid  } from '@material-ui/core'

class CityWeather extends Component {
    render() {
        return (
            <Paper className="container">
                <img src="https://developer.accuweather.com/sites/default/files/01-s.png" />
                <div>Tel Aviv</div>
                <div>38C</div>
                <div>Hearth</div>
                <Grid container justify="center" alignItems="center">
                    <h1>Scattered clouds</h1>
                </Grid>
                <Grid container justify="center" spacing={6}>
                    {[0, 1, 2, 3, 4].map(value => (
                        <Grid key={value} item>
                        <Paper>HEy hey ypu</Paper>
                        </Grid>
                    ))}
                </Grid>

            </Paper>
)
    }
}
export default CityWeather