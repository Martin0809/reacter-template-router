import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { xhr } from 'utils';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    xhr.get('/base.apiportal_ops/getUserInfo')
      .then()
      .catch()
  }

  render() {
    return (
      <div className="container">
        <p>Go <Link to="/">home</Link></p>
      </div>
    )
  }
}
