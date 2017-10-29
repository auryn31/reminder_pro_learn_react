import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        time: '',
      }
    }

    render() {
      return (
        <h1>This is a Timer</h1>
      )
    }
}

export default Timer;
