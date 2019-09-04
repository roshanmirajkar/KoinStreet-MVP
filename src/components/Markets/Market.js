import React, { Component } from 'react';
import './Market.css';
import Table from './component/table/table';
import { connect } from 'react-redux'
import { compose } from 'redux'

class Market extends Component {
  render() {

    const {auth} = this.props;
 //   if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div >
          <Table/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
  //    auth: state.firebase.auth,
    }
  }
  
  export default compose(
    connect(mapStateToProps)
  )(Market)
  
