import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import Product from "./Product";

import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route component={Header} />
        <Route>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" exact component={Product} />
          </Switch>
        </Route>
      </div>
    )
  }
}
