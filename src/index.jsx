import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles';

import App from './containers/App';

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <BrowserRouter>
        <Route component={Component} />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('./containers/App').default;

    render(App);
  });
}
