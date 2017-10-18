import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <p>
          To get started, edit src/containers/Home.jsx and save to reload.<br/>
          Click <Link to="/product">product</Link> to jump product router.
        </p>
      </div>
    )
  }
}
