import React, {Component} from 'react'
import { InputBase , Paper,  IconButton  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

class SearchBar extends Component {
    render() {
        return (
            <Paper>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <InputBase />
            </Paper>
        )
    }
}
export default SearchBar