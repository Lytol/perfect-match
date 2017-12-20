import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <h1>Perfect Match</h1>
    );
  }
}

render(<App />, document.getElementById('app'));
