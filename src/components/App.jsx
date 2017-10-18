import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="title">
              Reminder Pro
          </div>
          <div className ="form-inline">
            <div className ="form-group">
              <input
                className="form-control"
                placeholder="I hav to do..."
              />
            </div>
            <button
              type="button"
              className="btn btn-success">
              Add Reminder
            </button>
          </div>
        </div>
      )
    }
}

export default App;
