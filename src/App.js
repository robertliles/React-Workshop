import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuestBookInput from './GuestBookInput';

class App extends Component {
  state = {
    entries: [
      'Welcome!',
    ]
  };

  onGuestBookEntry = (value) => {
    this.setState({
      entries: this.state.entries.concat(value)
    });
  }

  render() {
    const {
      entries
    } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my guest book</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GuestBookInput
          onGuestBookEntry={this.onGuestBookEntry}
        />
        <div>
          {entries.map(entry => {
            <article>{entry}</article>
          })}
        </div>
      </div>
    );
  }
}

export default App;
