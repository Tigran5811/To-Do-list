import React, { Component } from 'react';
import { Button } from './components/button/Button';

export class App extends Component {
  constructor() {
    super();
    state = {
      type: 'button',
    };
  }

  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}
