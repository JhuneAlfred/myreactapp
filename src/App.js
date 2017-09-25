import React from 'react';
//import {CardLostStolen} from './cardLostStolen'
import {CardHome} from './cardHome'
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom'

export default () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/card-home"
               component={CardHome}/>
      

      </Switch>
    </div>
  );
}

const Header = () => (
  <div className="header">
    <h2>Safe Credit Union</h2>
    <div className="quick-links">
      <NavLink to="/card-home">Card home</NavLink>
      <NavLink to="/card-lost-stolen">Report card lost or stolen</NavLink>
    </div>
  </div>
)
