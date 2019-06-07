import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Settings extends Component {
  state = {
    apiKey: '',
    secretKey: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

console.log('Your favorite flavor is: ' + e.target.value);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    //this.props.createPost(this.state);
    //this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>

          <h3 className="grey-text text-darken-3">Add an Exchange</h3>
          <h5 className="grey-text text-darken-3">Binance</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">API Key</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Secret Key</label>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">Save Changes</button>
          </div>
        </form>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
