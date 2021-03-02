import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Login  from "./views/account/employerlogin";
import  Signup  from "./views/account/signup";  
import  Employeelogin  from "./views/account/employeelogin";
  






export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          {/*Authentication*/}
            <Route path='/employerlogin' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/employeelogin' component={Employeelogin} />

          </Switch>
        </Router>
      </div>
    )
  }
}
