import React, { Component } from 'react';
import './App.css';
import CryptoStreamer from './CryptoStreamer'
import CryptoStreamers from './CryptoStreamer.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class App extends Component {
  render() {
  const { authError, auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />
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

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
)(App)
