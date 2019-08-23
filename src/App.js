import React, { Component } from 'react'
import './App.css'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from './components/LandingPage/Landing';
import Favorites from './components/FavoritesPage/Favorites';

@observer
class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <div id="nav-bar">
            <Link to="/" style={{ textDecoration: 'none'}}>Home</Link>
            <Link to="/favorites" style={{ textDecoration: 'none'}}>Favorites</Link>
          </div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/favorites" component={Favorites} />
        </div>
      </Router>
    );
  }

}

export default App;
