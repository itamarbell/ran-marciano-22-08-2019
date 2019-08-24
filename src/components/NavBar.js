import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Paper className="nav-bar">
      <Tabs centered>
        <Tab label="Home" to='/' component={Link}/>
        <Tab label="Favorites"  to='/favorites' component={Link}/>
      </Tabs>
    </Paper>
  )
}