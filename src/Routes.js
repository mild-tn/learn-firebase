import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../src/pages/index'
import Login from '../src/pages/login'
import YourNote from '../src/pages/yournote'


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/yournote" component={YourNote}/>
      </Router>
    )
  }
}
