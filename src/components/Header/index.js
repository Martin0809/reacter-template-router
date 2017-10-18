import React, { Component } from 'react';

import logoImg from '../../images/logo.svg';

import './style';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logoImg} alt="logo"/>
        <h2>Welcom to React</h2>
      </header>
    )
  }
}
