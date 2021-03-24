import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './pages/NavBar'
// import About from './About'
// import User from './User'
import Home from './pages/Home'
// import Helper from './Helper'
import Login from './pages/Login'
import PhotoList from './pages/PhotoList'

function Ap() {
  return (
  <Router>
      <div>
          <NavBar />
          <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/helper" component={Helper} />
              <Route path="/about" component={About} />
              <Route path="/user" component={User} /> */}
              <Route path="/login" component={Login} />
              <Route path="/photoList" component={PhotoList} />
          </Switch>
      </div>
  </Router>
  )
}
export default Ap