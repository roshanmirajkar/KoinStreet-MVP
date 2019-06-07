import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

    var Terminal = React.createClass({
        render: function() {
          return (

            <div className="container">
              <div className="row">
                <h1>Visualize Orderbook</h1>
              </div>
              <div className="row">
                <input id="symbol" type="text" className="col-sm-2" placeholder="Symbol" defaultValue="BTCUSDT" />
              </div>
              <div className="row">
                <div className="col-sm-12" id="chartContainer1" style={{height: '400px', width: '100%'}} />
              </div>
              <div className="row">
                <div className="col-sm-12" id="chartContainer2" style={{height: '400px', width: '100%'}} />
              </div>
            </div>
          );
        }
      });

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
   // createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminal)
