import React, { Component } from "react";
import "./App.css";
import SmurfsProvider from './SmurfsProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsProvider />
      </div>
    );
  }
}

export default App;
