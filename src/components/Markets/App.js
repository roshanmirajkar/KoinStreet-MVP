import React, { Component } from 'react';
import './App.css';
import CryptoStreamer from './CryptoStreamer'
import CryptoStreamers from './CryptoStreamer.css'
//import axios from 'axios';
//var NumberFormat = require('react-number-format');


class App extends Component {
  render() {
    return (
      <div className="Crypto">
        <div className="App-header">
          <h2>
            Cryptocurrency Markets

          </h2>

          <div className="App">

                    <CryptoStreamer />
                  </div>
        </div>
      </div>
    )
  }

}

export default App
