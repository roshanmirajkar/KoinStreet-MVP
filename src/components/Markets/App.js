import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Table from './component/table/table';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class App extends Component {
  render() {

    const {auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="App">
       
          <Table/>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth,
    }
  }
  
  export default compose(
    connect(mapStateToProps)
  )(App)
  
