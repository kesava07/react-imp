import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import About from '../containers/about';
import ErrorPage from '../components/error-page';
import ToDoSaver from '../ToDoApp/mainRoot';
export default class AppRouting extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/to-do" component={ToDoSaver} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
